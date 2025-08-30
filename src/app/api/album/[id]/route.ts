import { NextRequest } from 'next/server'

import { fetchAlbumById } from '../handler'

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id: albumId } = await params

	if (albumId === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}

	const album = await fetchAlbumById(albumId)

	return new Response(JSON.stringify(album), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
