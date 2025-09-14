import { User } from '@/shared/api'
import { ze } from '@/shared/lib/log'

const KV_URL = process.env.KV_STORAGE!

export const fetchUserByEmail = async (email: string): Promise<User> => {
	const res = await fetch(`${KV_URL}/user/${email}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
	if (res.status === 404) ze('User not found')

	if (!res.ok) throw new Error(`User ${email} not found`)
	return res.json()
}

export const createUser = async (body: User): Promise<number> => {
	const res = await fetch(`${KV_URL}/user`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	})
	if (!res.ok) ze(`createUser error ${res.status}: ${await res.text()}`)
	return res.status
}

export const updateUser = async (
	email: string,
	patch: Partial<User>
): Promise<User> => {
	const res = await fetch(`${KV_URL}/user/${email}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(patch),
	})
	if (!res.ok) throw new Error(`Update user failed: ${res.status}`)
	return res.json()
}

export const deleteUser = async (email: string): Promise<void> => {
	const res = await fetch(`${KV_URL}/user/${email}`, {
		method: 'DELETE',
	})
	if (!res.ok) throw new Error(`Delete user failed: ${res.status}`)
}
