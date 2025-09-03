import { NextRequest, NextResponse } from 'next/server'

import { fetchTrackByHash } from '../handler'

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ hash: string }> }
) {
	const { hash } = await params

	try {
		const trackBuffer = await fetchTrackByHash(hash)

		return new NextResponse(trackBuffer, {
			status: 200,
			headers: {
				'Content-Type': 'audio/mpeg',
				// 'Content-Length': trackBuffer.length.toString(),
				'Accept-Ranges': 'bytes',
			},
		})
	} catch (e) {
		console.error(e)
		return NextResponse.json({ error: 'Not found' }, { status: 404 })
	}
}
