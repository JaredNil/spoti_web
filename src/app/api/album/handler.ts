import { AlbumInterface, AlbumsCollection } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const fetchAlbumById = async (id: string): Promise<AlbumInterface> => {
	const albumData = await fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
	if (!albumData.ok) {
		throw new Error(`Album ${id} not found`)
	}
	const album = (await albumData.json()) as AlbumInterface
	album.trackesId.forEach(
		(trackId, i) => (album.trackesId[i] = trackId.toString())
	)
	return album
}

const users = [
	{
		albumsId: [0, 1, 2, 3, 4, 5, 6],
	},
	{
		albumsId: [2, 5],
	},
]

export const fetchAlbumsByUser = async (
	userId: string
): Promise<AlbumsCollection> => {
	try {
		const { albumsId } = users[Number(userId)] // REFACTOR REQ TO KV DATABASE CLOIDFLARE TO RESPONCE LIST OF HAVING ALBUM

		if (!userId || userId.trim() === '') ze('Empty userId')

		const promises = albumsId.map((id) =>
			fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => res.json())
				.catch(() => {
					ze(`[fetchAlbumsByUser] Album ${id} fetch is failed`)
					return null
				})
		)
		const albums = (await Promise.all(promises)) as AlbumsCollection

		// number to string id-hash
		const checkedAlbums = albums.filter(Boolean).map((album) => ({
			...album,
			trackesId: album.trackesId?.map((id) => String(id)) ?? [],
		})) as AlbumsCollection

		return checkedAlbums
	} catch (err) {
		ze(`fetchAlbumsByUser error: ${err}`)
		return []
	}
}

export const fetchAlbumsJarefy = async (): Promise<AlbumsCollection> => {
	const albumsIdJarefy = [0, 1, 2, 3, 4, 5, 6]
	// REFACTOR REQ TO KV DATABASE CLOIDFLARE TO RESPONCE LIST OF HAVING ALBUM

	const promises = albumsIdJarefy.map((id) =>
		fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => {
			if (!res.ok) {
				ze(`[fetchAlbumsCommunity] ${res.status} ${res.statusText}`)
				return []
			}
			return res.json()
		})
	)
	const albums = (await Promise.all(promises)) as AlbumsCollection

	const checkedAlbums = albums.filter(Boolean).map((album) => ({
		...album,
		trackesId: album.trackesId?.map((id) => String(id)) ?? [],
	})) as AlbumsCollection

	return checkedAlbums
}

export const fetchAlbumsCommunity = async (): Promise<AlbumsCollection> => {
	const albums = (await fetch(`${process.env.KV_STORAGE}/albums2`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then((res) => {
		if (!res.ok) {
			ze(`[fetchAlbumsCommunity] ${res.status} ${res.statusText}  `)
			return []
		}
		return res.json()
	})) as AlbumsCollection

	return albums
}

export const updateAlbum = async (
	albumId: string,
	body: AlbumInterface
): Promise<void> => {
	fetch(`${process.env.KV_STORAGE}/albums/${albumId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).then((res) => {
		if (!res.ok) return null // ДОБАВИТЬ ОБРАБОТКУ ОШИБОК, BACKLOG
		return res.json()
	})
}
