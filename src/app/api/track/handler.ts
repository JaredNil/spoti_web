import { GetObjectCommand } from '@aws-sdk/client-s3'

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

export const createMetaTrack = async (body: Track): Promise<number> => {
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
