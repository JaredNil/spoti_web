import crypto from 'crypto'

import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'

import { s3 } from '@/shared/api/api'

export const fetchTrackByHash = async (hash: string): Promise<any> => {
	try {
		const res = await s3.send(
			new GetObjectCommand({
				Bucket: process.env.VK_BUCKET!,
				Key: `${hash}`,
			})
		)

		const trackBuffer = Buffer.from(await res.Body!.transformToByteArray())

		return trackBuffer
	} catch (e) {
		console.error(e)
	}
}

export async function uploadMP3(
	buffer: Buffer,
	originalName: string
): Promise<string> {
	const shortHash = crypto
		.createHash('sha256')
		.update(originalName)
		.digest('hex')
		.slice(0, 16)

	const key = `${shortHash}`

	await s3.send(
		new PutObjectCommand({
			Bucket: process.env.VK_BUCKET!,
			Key: key,
			Body: buffer,
			ContentType: 'audio/mpeg',
		})
	)

	return `https://hb.vkcs.cloud/${process.env.VK_BUCKET}/${key}`
}
