import { Album } from '@/shared/api'
import { Handler } from '..'
import { get, json, list, del, httpError, put } from './utils'

export const listAlbums: Handler = async (_req, env) => {
	const albums = await list<Album>(env.ALBUMS_KV, 'album:')
	return json(
		albums.map((a) => ({ ...a, creationDate: new Date(a.creationDate!) }))
	)
}

export const getAlbum: Handler = async (_req, env, _ctx, { id }) => {
	const album = await get<Album>(env.ALBUMS_KV, `album:${id}`)
	if (!album) return httpError('Album not found', 404)
	return json({
		...album,
		creationDate: album.creationDate ? new Date(album.creationDate) : null,
	})
}

export const createAlbum: Handler = async (req, env) => {
	const body = await req.json<Album>()
	if (!body?.hash) return httpError('Missing album id', 400)
	const key = `album:${body.hash}`
	if (await get(env.ALBUMS_KV, key)) return httpError('Album exists', 409)
	await put(env.ALBUMS_KV, key, body)
	return json(body, 201)
}

export const updateAlbum: Handler = async (req, env, _ctx, { id }) => {
	const patch = await req.json<Partial<Album>>()
	const key = `album:${id}`
	const old = await get<Album>(env.ALBUMS_KV, key)
	if (!old) return httpError('Album not found', 404)
	const updated = { ...old, ...patch, id }
	await put(env.ALBUMS_KV, key, updated)
	return json(updated)
}

export const deleteAlbum: Handler = async (_req, env, _ctx, { id }) => {
	const key = `album:${id}`
	if (!(await get(env.ALBUMS_KV, key)))
		return httpError('Album not found', 404)
	await del(env.ALBUMS_KV, key)
	return json('АЛЬБОМ УДАЛИТЬ')
}
