import { NextRequest } from 'next/server'

import { addTrackToAlbum, removeTrackFromAlbum } from '../handlers'

export async function PUT(
	_: NextRequest,
	{ params }: { params: Promise<{ id: string; hash: string }> }
) {
	const { id, hash } = await params
	try {
		const res = await addTrackToAlbum(id, hash)
		return Response.json(res, { status: 200 })
	} catch (e) {
		return Response.json({ error: (e as Error).message }, { status: 404 })
	}
}

export async function DELETE(
	_: NextRequest,
	{ params }: { params: Promise<{ id: string; hash: string }> }
) {
	const { id, hash } = await params
	try {
		const res = await removeTrackFromAlbum(id, hash)
		return Response.json(res, { status: 200 })
	} catch (e) {
		return Response.json({ error: (e as Error).message }, { status: 404 })
	}
}
