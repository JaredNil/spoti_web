import { AlbumInterface } from '@/shared/api'

export const fetchAlbumById = async (id: string): Promise<AlbumInterface> => {
	const res = await fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		cache: 'force-cache',
	})
	if (!res.ok) {
		throw new Error(`Album ${id} not found`)
	}
	return res.json()
}
