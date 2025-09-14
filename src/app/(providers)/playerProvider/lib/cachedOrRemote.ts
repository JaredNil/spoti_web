const S3_STORAGE = process.env.NEXT_PUBLIC_VK_ENDPOINT
const S3_BUCKET = process.env.NEXT_PUBLIC_VK_BUCKET
export const cachedOrRemote = (hash: string) => {
	const pathOutside = S3_STORAGE + `/` + S3_BUCKET + `/` + hash
	return pathOutside
}
