import { NextRequest } from 'next/server'

import { fetchAllMetaTrackesServer } from '../track/handlerMeta'

import { Trackes } from '@/shared/api'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const searching = searchParams.get('query')?.trim()
	if (searching === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}
	if (searching.length === 0) {
		return new Response('Empty track list ids', { status: 400 })
	}

	const trackes = await fetchAllMetaTrackesServer()
	const searchResult = findByReq(trackes, searching)
	console.log(searchResult)
	return new Response(JSON.stringify(searchResult), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

function findByReq(tracks: Trackes, query: string): Trackes {
	if (!query.trim()) return tracks

	const q = query.trim().toLowerCase()

	return tracks.filter(
		(t) =>
			t.title.toLowerCase().includes(q) ||
			t.author.toLowerCase().includes(q)
	)
}
