import { AlbumInterface, AlbumsCollection } from '@/shared/api'

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

const users = [
	{
		albumsId: [0, 1, 2, 3, 4, 5, 6],
	},
	{
		albumsId: [2, 5],
	},
]

export const fetchAlbumByUser = async (
	id: string
): Promise<AlbumsCollection> => {
	const { albumsId } = users[Number(id)] // REFACTOR REQ TO KV DATABASE CLOIDFLARE TO RESPONCE LIST OF HAVING ALBUM

	const promises = albumsId.map((id) =>
		fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			cache: 'force-cache',
		}).then((res) => {
			if (!res.ok) return null // ДОБАВИТЬ ОБРАБОТКУ ОШИБОК, BACKLOG
			return res.json()
		})
	)
	const albums = (await Promise.all(promises)) as AlbumsCollection

	return albums
}
