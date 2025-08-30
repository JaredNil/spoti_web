/// <reference types="@cloudflare/workers-types" />

export interface Env {
	ALBUMS_KV: KVNamespace
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url)
		const pathname = url.pathname

		// Обработка CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			})
		}

		try {
			// GET /albums — все альбомы
			if (pathname === '/albums' && request.method === 'GET') {
				const keys = await env.ALBUMS_KV.list({ prefix: 'album:' })

				const albums = await Promise.all(
					keys.keys.map(async (key) => {
						const value = await env.ALBUMS_KV.get(key.name)
						if (!value) return null
						const album = JSON.parse(value)
						album.creationDate = new Date(album.creationDate)
						return album
					})
				)

				const filtered = albums.filter(Boolean)

				return json(filtered)
			}

			// GET /albums/3 — один альбом по ID
			const match = pathname.match(/^\/albums\/(\d+)$/)
			if (match && request.method === 'GET') {
				const id = parseInt(match[1], 10)
				const key = `album:${id}`
				const value = await env.ALBUMS_KV.get(key)

				if (!value) {
					return new Response('Album not found', { status: 404 })
				}

				const album = JSON.parse(value)
				album.creationDate = new Date(album.creationDate)

				return json(album)
			}

			// Неизвестный маршрут
			return new Response('Not Found', { status: 404 })
		} catch (error) {
			return new Response(`Internal Error:`, {
				status: 500,
			})
		}
	},
}

// Вспомогательная функция для JSON-ответа
function json(data: any, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*', // Разрешить всем (или укажи свой домен)
		},
	})
}
