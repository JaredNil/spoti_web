import { NextRequest } from 'next/server'

import { fetchAlbumById, updateAlbum } from '../handler'

import { Album } from '@/shared/api'

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id: albumId } = await params

	if (albumId === undefined) {
		return new Response('Missing fields album_id', { status: 400 })
	}

	const album = await fetchAlbumById(albumId)
	return new Response(JSON.stringify(album), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function PATCH(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id: albumId } = await params

	const body = (await req.json()) as Album
	if (albumId === undefined) {
		return new Response('Missing fields album_id', { status: 400 })
	}

	await updateAlbum(albumId, body)

	return new Response('', {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
