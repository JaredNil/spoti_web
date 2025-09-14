import { NextRequest } from 'next/server'

import { createUser } from '../handler'

import { User } from '@/shared/api'
export async function POST(req: NextRequest) {
	const body = (await req.json()) as User
	const status = await createUser(body)
	return new Response('', { status })
}
