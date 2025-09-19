import { zw } from '@/shared/lib/log'

const S3_STORAGE = process.env.NEXT_PUBLIC_VK_ENDPOINT
const S3_BUCKET = process.env.NEXT_PUBLIC_VK_BUCKET

export const cachedOrRemote = (hash: string) => {
	if (!hash) {
		zw('Empty hash in track')
		return
	}

	return `${S3_STORAGE}/${S3_BUCKET}/${hash}`

	// const range = 'bytes=0-63999'
	// return `/api/s3/${hash}?range=${encodeURIComponent(range)}`
}
