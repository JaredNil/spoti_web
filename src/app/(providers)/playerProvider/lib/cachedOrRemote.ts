const S3_STORAGE = process.env.NEXT_PUBLIC_VK_CDN
const S3_BUCKET = process.env.NEXT_PUBLIC_VK_BUCKET
const ASSETS_DIR = '/cache/'

export const cachedOrRemote = (hash: string) => {
	if (!hash) return

	return `${S3_STORAGE}/${S3_BUCKET}/${hash}`

	// const range = 'bytes=0-63999'
	// return `/api/s3/${hash}?range=${encodeURIComponent(range)}`
}
