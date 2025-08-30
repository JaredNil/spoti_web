export async function GET() {
	const albums = await (
		await fetch(`${process.env.KV_STORAGE}/albums`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			cache: 'force-cache',
		})
	).json()

	return new Response(JSON.stringify(albums), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
