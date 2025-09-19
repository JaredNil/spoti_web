self.addEventListener('fetch', (e) => {
	const url = new URL(e.request.url)
	if (url.pathname.includes('/api/audioChunk')) {
		e.respondWith(
			caches.open('audio-chunks').then(async (cache) => {
				const cached = await cache.match(e.request.url)
				if (cached) return cached
				const realRes = await fetch(e.request)
				if (realRes.ok) cache.put(e.request.url, realRes.clone())
				return realRes
			})
		)
	}
})
