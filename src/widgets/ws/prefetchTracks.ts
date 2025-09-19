import { putChunk } from './cacheChunks'

export async function prefetchHead(trackId: string, cdnUrl: string) {
	const headUrl = `${cdnUrl}/api/audioChunk?id=${trackId}&range=bytes=0-63999`
	const res = await fetch(headUrl)
	if (!res.ok) return
	const buf = await res.arrayBuffer()
	await putChunk(headUrl, buf, res.headers.get('Content-Range')!)
}
