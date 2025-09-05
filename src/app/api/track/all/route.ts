import { fetchAllMetaTrackesServer } from '../handlerMeta'

export async function GET() {
	const trackes = await fetchAllMetaTrackesServer()

	return new Response(JSON.stringify(trackes), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
