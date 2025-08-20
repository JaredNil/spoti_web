import { ALBUMS } from '../../../../public/content/ALBUMS_CONTENT'

export async function POST(request: Request) {
	const body = await request.json()
	const { user_id } = body

	if (user_id === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}

	const albums = ALBUMS.filter((album) => {
		if (album.user_id === user_id) {
			return album
		}
	})
	return new Response(JSON.stringify(albums), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
