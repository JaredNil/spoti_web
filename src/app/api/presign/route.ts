import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { s3 } from '@/shared/api/api'

export async function POST(req: Request) {
	const { songLink } = (await req.json()) as { songLink: string }

	const key = `${songLink}`

	const command = new PutObjectCommand({
		Bucket: process.env.VK_BUCKET!,
		Key: key,
		ContentType: 'audio/mpeg',
	})

	const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 900 })
	const publicUrl = `https://${process.env.S3_BUCKET}.hb.ru-1.vkcs.cloud/${key}`

	return Response.json({ uploadUrl, key, publicUrl })
}
