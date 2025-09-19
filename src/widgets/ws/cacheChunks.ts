const CACHE = 'audio-chunks'
const HEAD_SIZE = 64 * 1024 // 64 КБ
const CHUNK_SIZE = 256 * 1024 // 256 КБ

export async function putChunk(
	url: string,
	bytes: ArrayBuffer,
	range?: string
) {
	const cache = await caches.open(CACHE)
	const headers: HeadersInit = { 'Content-Type': 'audio/mpeg' }
	if (range) headers['Content-Range'] = range
	const res = new Response(bytes, { status: range ? 206 : 200, headers })
	await cache.put(url, res)
}

export async function getChunk(url: string, range?: string) {
	const cache = await caches.open(CACHE)
	const req = new Request(url, { headers: range ? { Range: range } : {} })
	return cache.match(req)
}

export async function fetchAndCacheTail(
	baseUrl: string,
	start: number,
	total: number
) {
	let off = start
	while (off < total) {
		const end = Math.min(off + CHUNK_SIZE - 1, total - 1)
		const range = `bytes=${off}-${end}`
		const url = `${baseUrl}?range=${range}`
		// если кусок уже есть — пропускаем
		if (await getChunk(url, range)) {
			off += CHUNK_SIZE
			continue
		}
		const res = await fetch(url)
		if (!res.ok) break
		const buf = await res.arrayBuffer()
		await putChunk(url, buf, res.headers.get('Content-Range')!)
		off += CHUNK_SIZE
	}
}
