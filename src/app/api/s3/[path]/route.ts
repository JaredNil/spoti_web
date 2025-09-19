import { GetObjectCommand } from '@aws-sdk/client-s3'
import { NextRequest, NextResponse } from 'next/server'

import { s3 } from '@/shared/api/api'

const BUCKET = process.env.NEXT_PUBLIC_VK_BUCKET!

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ path: string[] }> }
) {
	const { path } = await params
	const key = Array.isArray(path) ? path.join('/') : path

	if (!key) {
		return NextResponse.json({ error: 'No track key' }, { status: 400 })
	}

	// Парсим Range-заголовок (если есть)
	const rangeHeader = req.headers.get('range') ?? undefined
	const rangeMatch = rangeHeader?.match(/bytes=(\d+)-(\d*)/)
	const start = rangeMatch ? Number(rangeMatch[1]) : undefined
	const end = rangeMatch && rangeMatch[2] ? Number(rangeMatch[2]) : undefined

	const command = new GetObjectCommand({
		Bucket: BUCKET,
		Key: key,
		Range:
			typeof start === 'number'
				? `bytes=${start}-${typeof end === 'number' ? end : ''}`
				: undefined,
	})

	try {
		const response = await s3.send(command)
		const contentLength = response.ContentLength!
		const contentRange = response.ContentRange
		const contentType = 'audio/mpeg'

		const stream = response.Body as ReadableStream

		return new NextResponse(stream, {
			status: rangeHeader ? 206 : 200,
			headers: {
				'Content-Type': contentType,
				'Content-Length': String(contentLength),
				...(contentRange && { 'Content-Range': contentRange }),
				'Accept-Ranges': 'bytes',
				'Cache-Control': 'public, max-age=31536000, immutable',
			},
		})
	} catch (e: any) {
		if (e?.$metadata?.httpStatusCode === 404) {
			return NextResponse.json(
				{ error: 'Track not found' },
				{ status: 404 }
			)
		}
		return NextResponse.json({ error: 'S3 error' }, { status: 500 })
	}
}
