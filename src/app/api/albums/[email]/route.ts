import { NextRequest } from 'next/server'

import { fetchAlbumsByUser } from '../handler'

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ email: string }> }
) {
	const { email } = await params

	if (email === undefined || email === '') {
		return new Response('Missing fields email', { status: 400 })
	}

	const albums = await fetchAlbumsByUser(email)
	console.log('albums hashes')
	console.log(albums)
	return new Response(JSON.stringify(albums), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
