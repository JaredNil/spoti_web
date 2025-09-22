import { NextRequest } from 'next/server'

import { deleteAlbum, fetchAlbumById, updateAlbum } from '../handler'

import { Album } from '@/shared/api'

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id: albumId } = await params

	if (albumId === undefined) {
		return new Response('Missing fields album_id', { status: 400 })
	}
	const album = await fetchAlbumById(albumId)
	if (album === null)
		return new Response(JSON.stringify(album), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		})
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
export async function DELETE(
	_: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id: albumHash } = await params
	if (albumHash === undefined) {
		return new Response('Missing fields albumHash', { status: 400 })
	}
	const res = await deleteAlbum(albumHash)

	return new Response(JSON.stringify(res), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
