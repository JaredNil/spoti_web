import { createAlbum } from '../handler'

import { Album } from '@/shared/api'

export async function GET() {
	const albums = await (
		await fetch(`${process.env.KV_STORAGE}/albums`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
	).json()

	return new Response(JSON.stringify(albums), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function POST(req: Request) {
	const album = (await req.json()) as Album

	const res = await createAlbum(album)
	if (res !== 201) {
		return new Response('Error create track', { status: 500 })
	}

	return new Response(JSON.stringify(res), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
