import { Track } from '@/shared/api'
import { Handler } from '..'
import { get, json, list, del, httpError, put } from './utils'

export const listTracks: Handler = async (_req, env) => {
	const tracks = await list<Track>(env.TRACKES_KV, 'track:')
	return json(tracks)
}

export const getTrack: Handler = async (_req, env, _ctx, { id }) => {
	const track = await get<Track>(env.TRACKES_KV, `track:${id}`)
	if (!track) return httpError('Track not found', 404)
	return json(track)
}

export const createTrack: Handler = async (req, env) => {
	const body = await req.json<Track>()
	if (!body?.id) return httpError('Missing track id', 400)

	const key = `track:${body.id}`
	if (await get(env.TRACKES_KV, key)) return httpError('Track exists', 409)

	await put(env.TRACKES_KV, key, body)
	return json(body, 201)
}

export const updateTrack: Handler = async (req, env, _ctx, { id }) => {
	const patch = await req.json<Partial<Track>>()
	const key = `track:${id}`
	const old = await get<Track>(env.TRACKES_KV, key)
	if (!old) return httpError('Track not found', 404)

	const updated: Track = { ...old, ...patch, id }
	await put(env.TRACKES_KV, key, updated)
	return json(updated)
}

export const deleteTrack: Handler = async (_req, env, _ctx, { id }) => {
	const key = `track:${id}`
	if (!(await get(env.TRACKES_KV, key)))
		return httpError('Track not found', 404)
	await del(env.TRACKES_KV, key)
	return json('Track deleted')
}
