import { NextRequest } from 'next/server'

import { fetchUserByEmail, updateUser } from '../../handler'

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
) {
	const { email } = await params
	const { trackHash, like }: { trackHash: string; like: boolean } =
		await req.json()

	const user = await fetchUserByEmail(email)
	if (!user)
		return Response.json({ error: 'User not found' }, { status: 404 })

	const set = new Set(user.likedHash)
	if (like) set.add(trackHash)
	else set.delete(trackHash)

	const updated = await updateUser(email, {
		...user,
		likedHash: Array.from(set),
	})
	return Response.json(updated)
}
