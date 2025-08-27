import { NextRequest } from 'next/server'

import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const query = searchParams.get('query')
	const trackesId = query?.split(',')
	if (trackesId === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}
	if (trackesId.length === 0) {
		return new Response('Empty track list ids', { status: 400 })
	}

	const trackes = TRACKES.filter((track) => {
		if (trackesId.includes(track.id.toString())) {
			return track
		}
	})

	return new Response(JSON.stringify(trackes), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
