import { NextRequest } from 'next/server'

import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const query = searchParams.get('query') // e.g. `/api/search?query=hello`

	console.log(query)
	// if (trackes_id === undefined) {
	// 	return new Response('Missing fields user_id', { status: 400 })
	// }
	// if (trackes_id.length === 0) {
	// 	return new Response('Empty track list ids', { status: 400 })
	// }

	let result: never[] = []
	// TRACKES.filter((track) => {
	// 	if (trackes_id.includes(track.id)) {
	// 		return track
	// 	}
	// })
	result = []
	console.log(result)
	return new Response(JSON.stringify(result), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
