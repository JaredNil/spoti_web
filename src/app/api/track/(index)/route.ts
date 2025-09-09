import { NextRequest } from 'next/server'

import { createMetaTrack } from '../handlerMeta'
import { fetchMetaTrackesServer } from '../handlerMeta'

import { Track } from '@/shared/api'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const query = searchParams.get('query')
	const trackesId = query?.split(',')
	if (trackesId === undefined) {
		return new Response('Missing fields user_id', { status: 400 })
	}
	if (trackesId.length === 0) {
		return new Response('Empty track list ids', { status: 400 })
	}
	const trackes = await fetchMetaTrackesServer(trackesId)

	return new Response(JSON.stringify(trackes), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function POST(req: Request) {
	const track = (await req.json()) as Track

	const res = await createMetaTrack(track)
	if (res !== 201) {
		return new Response('Error create track', { status: 500 })
	}

	return new Response(JSON.stringify(res), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
