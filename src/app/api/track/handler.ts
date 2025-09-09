import crypto from 'crypto'

import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'

import { Track } from '@/shared/api'
import { s3 } from '@/shared/api/api'
import { ze } from '@/shared/lib/log'

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

export async function uploadMP3(buffer: Buffer, key: string): Promise<string> {
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

export const createMetaTrack = async (body: Track): Promise<number> => {
	console.log(body)
	console.log(`${process.env.KV_STORAGE}/tracks/${body.id}`)
	return fetch(`${process.env.KV_STORAGE}/tracks`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).then(async (res) => {
		if (!res.ok) {
			const text = await res.text()
			ze(`createMetaTrack error ${res.status}: ${text}`)
		}
		return res.status
	})
}
