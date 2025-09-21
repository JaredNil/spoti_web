import { User } from '@/shared/api'
import { Handler } from '..'
import { get, json, list, del, httpError, put } from './utils'

export const createUser: Handler = async (req, env) => {
	const body = await req.json<User>()
	if (!body.email) return httpError('Missing email', 400)
	const key = `user:${body.email}`
	if (await get(env.USERS_KV, key)) return httpError('User exists', 409)
	const { password: _, ...safe } = body
	await put(env.USERS_KV, key, safe)
	return json(safe, 201)
}

export const getUser: Handler = async (_req, env, _ctx, { email }) => {
	const user = await get<User>(env.USERS_KV, `user:${email}`)
	if (!user) return httpError('User not found', 404)
	return json(user)
}

export const updateUser: Handler = async (req, env, _ctx, { email }) => {
	const patch = await req.json<Partial<User>>()
	const key = `user:${email}`
	const old = await get<User>(env.USERS_KV, key)
	if (!old) return httpError('User not found', 404)
	const updated = { ...old, ...patch, email }
	const { password: _, ...safe } = updated
	await put(env.USERS_KV, key, safe)
	return json(safe)
}

export const deleteUser: Handler = async (_req, env, _ctx, { email }) => {
	const key = `user:${email}`
	if (!(await get(env.USERS_KV, key))) return httpError('User not found', 404)
	await del(env.USERS_KV, key)
	return json('User deleted')
}
