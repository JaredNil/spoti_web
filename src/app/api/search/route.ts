import { NextRequest } from 'next/server'

import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

import { Trackes } from '@/shared/api'

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const searching = searchParams.get('query')?.trim()
	if (searching === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}
	if (searching.length === 0) {
		return new Response('Empty track list ids', { status: 400 })
	}

	return new Response(JSON.stringify(findByReq(TRACKES, searching)), {
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
