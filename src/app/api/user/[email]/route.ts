import { NextRequest } from 'next/server'

import { fetchUserByEmail, deleteUser, updateUser } from '../handler'

import { User } from '@/shared/api'

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
) {
	const { email } = await params
	if (!email) return new Response('Missing email', { status: 400 })

	const user = await fetchUserByEmail(email)
	return new Response(JSON.stringify(user), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
) {
	const { email } = await params
	if (!email) return new Response('Missing email', { status: 400 })

	const patch = (await req.json()) as User
	const updated = await updateUser(email, patch)
	return new Response(JSON.stringify(updated), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function DELETE(
	_request: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
) {
	const { email } = await params
	if (!email) return new Response('Missing email', { status: 400 })

	await deleteUser(email)
	return new Response('User deleted', { status: 200 })
}
