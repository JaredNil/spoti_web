import { fetchUserByEmail } from '../user/handler'

import { Album, AlbumsCollection } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const fetchAlbumById = async (id: string): Promise<Album | null> => {
	const albumData = await fetch(`${process.env.KV_STORAGE}/albums/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
	if (!albumData.ok) {
		ze(`Album ${id} not found`)
		return null
	}
	const album = (await albumData.json()) as Album

	album.trackesHash.forEach(
		(trackHash, i) => (album.trackesHash[i] = trackHash.toString())
	)
	return album
}

export const fetchAlbumsJarefy = async (): Promise<AlbumsCollection> => {
	const userdata = await fetchUserByEmail('Jarefy')
	if (!userdata) {
		ze('Данные пользователя не найдены')
		return []
	}
	const { albumsHash } = userdata
	const promises = albumsHash.map((hash) =>
		fetch(`${process.env.KV_STORAGE}/albums/${hash}`, {
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
		TrackesHash: album.trackesHash?.map((hash) => String(hash)) ?? [],
	})) as AlbumsCollection

	return checkedAlbums
}

export const fetchAlbumsCommunity = async (): Promise<AlbumsCollection> => {
	const albums = (await fetch(`${process.env.KV_STORAGE}/albums`, {
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
	body: Album
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

export const createAlbum = async (body: Album): Promise<number> => {
	return fetch(`${process.env.KV_STORAGE}/albums`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).then(async (res) => {
		if (!res.ok) {
			const text = await res.text()
			ze(`createAlbum error ${res.status}: ${text}`)
		}
		return res.status
	})
}
export const deleteAlbum = async (albumHash: string): Promise<void> => {
	fetch(`${process.env.KV_STORAGE}/albums/${albumHash}`, {
		method: 'DELETE',
	}).then((res) => {
		if (!res.ok) return null // ДОБАВИТЬ ОБРАБОТКУ ОШИБОК, BACKLOG
		return res.json()
	})
}
