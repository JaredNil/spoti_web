import { NextRequest } from 'next/server'

import { fetchUserByEmail, updateUser } from '../../handler'

type PutBody = { trackHash: string }

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
): Promise<Response> {
	const { email } = await params
	const body: PutBody = await req.json()
	const { trackHash } = body

	console.log('here')
	const user = await fetchUserByEmail(email)
	if (!user) {
		const error = { error: 'User not found' }
		return Response.json(error, { status: 404 })
	}

	const set = new Set(user.trackesHash)
	set.add(trackHash)

	const updated = await updateUser(email, {
		...user,
		trackesHash: Array.from(set),
	})

	return Response.json(updated)
}
