// /// <reference types="@cloudflare/workers-types" />

// import { AlbumInterface, Track } from '@/shared/api'
// import { json } from './model/utils'

// export type Handler = (
// 	req: Request,
// 	env: Env,
// 	ctx: ExecutionContext,
// 	params?: Record<string, string>
// ) => Promise<Response>

// export interface Env {
// 	ALBUMS_KV: KVNamespace
// 	TRACKES_KV: KVNamespace
// 	USERS_KV: KVNamespace
// }

// export default {
// 	async fetch(request: Request, env: Env): Promise<Response> {
// 		const url = new URL(request.url)
// 		const pathname = url.pathname
// 		const method = request.method

// 		if (request.method === 'OPTIONS') {
// 			return new Response(null, {
// 				headers: {
// 					'Access-Control-Allow-Origin': '*',
// 					'Access-Control-Allow-Methods': 'GET, OPTIONS',
// 					'Access-Control-Allow-Headers': 'Content-Type',
// 				},
// 			})
// 		}

// 		try {
// 			if (pathname === '/albums' && method === 'GET') {
// 				const keys = await env.ALBUMS_KV.list({
// 					prefix: 'album:',
// 				})
// 				const albums = await Promise.all(
// 					keys.keys.map(async (key) => {
// 						const value = await env.ALBUMS_KV.get(key.name)
// 						if (!value) return null
// 						const album = JSON.parse(value)
// 						album.creationDate = new Date(album.creationDate)
// 						return album
// 					})
// 				)

// 				const filtered = albums.filter(Boolean)

// 				return json(filtered)
// 			}
// 			if (pathname === '/albums' && method === 'POST') {
// 				const body = (await request.json()) as AlbumInterface
// 				if (!body || typeof body.id !== 'string' || !body.id) {
// 					return new Response('Missing or invalid album id', {
// 						status: 400,
// 					})
// 				}

// 				const key = `album:${body.id}`
// 				const exists = await env.ALBUMS_KV.get(key)
// 				if (exists)
// 					return new Response('Album already exists', { status: 409 })

// 				await env.ALBUMS_KV.put(key, JSON.stringify(body))
// 				return json(body, 201)
// 			}
// 			const albumMatch = pathname.match(/^\/albums\/([a-zA-Z0-9_-]+)$/)
// 			const albumId = albumMatch ? albumMatch[1] : null

// 			if (albumId && method === 'GET') {
// 				const key = `album:${albumId}`
// 				const value = await env.ALBUMS_KV.get(key)
// 				if (!value)
// 					return new Response('Album not found', { status: 404 })
// 				const album = JSON.parse(value)
// 				album.creationDate = new Date(album.creationDate)
// 				return json(album)
// 			}
// 			if (albumId && method === 'PUT') {
// 				const body = await request.json()
// 				if (!body || typeof body !== 'object') {
// 					return new Response('Invalid payload', { status: 400 })
// 				}
// 				const key = `album:${albumId}`
// 				const existing = await env.ALBUMS_KV.get(key)
// 				const album = existing ? JSON.parse(existing) : {}
// 				const updated = { ...album, ...body, id: parseInt(albumId, 10) }
// 				await env.ALBUMS_KV.put(key, JSON.stringify(updated))
// 				return json(updated)
// 			}
// 			if (albumId && method === 'DELETE') {
// 				const key = `album:${albumId}`
// 				const existed = await env.ALBUMS_KV.get(key)
// 				if (!existed)
// 					return new Response('Album not found', { status: 404 })
// 				await env.ALBUMS_KV.delete(key)
// 				return new Response('Album deleted', { status: 200 })
// 			}

// 			if (pathname === '/tracks' && method === 'POST') {
// 				const body = (await request.json()) as Track

// 				if (!body || typeof body.id !== 'string' || !body.id) {
// 					return new Response('Missing or invalid track id', {
// 						status: 400,
// 					})
// 				}

// 				const key = `track:${body.id}`
// 				const exists = await env.TRACKES_KV.get(key)
// 				if (exists)
// 					return new Response('Track already exists', { status: 409 })

// 				await env.TRACKES_KV.put(key, JSON.stringify(body))
// 				return json(body, 201)
// 			}

// 			if (pathname === '/tracks' && request.method === 'GET') {
// 				const keys = await env.TRACKES_KV.list({
// 					prefix: 'track:',
// 				})
// 				const tracks = (
// 					await Promise.all(
// 						keys.keys.map(async (k) => {
// 							const v = await env.TRACKES_KV.get(k.name)
// 							return v ? JSON.parse(v) : null
// 						})
// 					)
// 				).filter(Boolean)
// 				return json(tracks)
// 			}
// 			const trackMatch = pathname.match(/^\/tracks\/([^/]+)$/)
// 			const trackId = trackMatch ? trackMatch[1] : null

// 			if (trackId && method === 'GET') {
// 				const value = await env.TRACKES_KV.get(`track:${trackId}`)
// 				if (!value)
// 					return new Response('Track not found', { status: 404 })
// 				return json(JSON.parse(value))
// 			}

// 			if (trackId && method === 'PUT') {
// 				const body = await request.json()
// 				const key = `track:${trackId}`
// 				const existing = await env.TRACKES_KV.get(key)
// 				const track = existing ? JSON.parse(existing) : {}
// 				const updated = { ...track, body, id: trackId }
// 				await env.TRACKES_KV.put(key, JSON.stringify(updated))
// 				return json(updated)
// 			}

// 			if (trackId && method === 'DELETE') {
// 				const key = `track:${trackId}`
// 				const existed = await env.TRACKES_KV.get(key)
// 				if (!existed)
// 					return new Response('Track not found', { status: 404 })
// 				await env.TRACKES_KV.delete(key)
// 				return new Response('Track deleted', { status: 200 })
// 			}

// 			return new Response('Not Found', { status: 404 })
// 		} catch (error) {
// 			return new Response(`Internal Error: ${(error as Error).message}`, {
// 				status: 500,
// 			})
// 		}
// 	},
// }

// // function json(data: any, status = 200) {
// // 	return new Response(JSON.stringify(data), {
// // 		status,
// // 		headers: {
// // 			'Content-Type': 'application/json',
// // 			'Access-Control-Allow-Origin': '*',
// // 		},
// // 	})
// // }
