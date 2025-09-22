import { fetchUserByEmail } from '../user/handler'

import { AlbumsCollection } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const fetchAlbumsByUser = async (
	email: string
): Promise<AlbumsCollection> => {
	try {
		const data = await fetchUserByEmail(email)
		if (data === null) throw new Error('Юзера не существует')
		const { albumsHash } = data
		const promises = albumsHash.map((hash) =>
			fetch(`${process.env.KV_STORAGE}/albums/${hash}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => res.json())
				.catch(() => {
					ze(`[fetchAlbumsByUser] Album ${hash} fetch is failed`)
					return null
				})
		)
		const albums = (await Promise.all(promises)) as AlbumsCollection

		// number to string id-hash
		const checkedAlbums = albums.filter(Boolean).map((album) => ({
			...album,
			trackesHash: album.trackesHash?.map((id) => String(id)) ?? [],
		})) as AlbumsCollection

		return checkedAlbums
	} catch (err) {
		ze(`fetchAlbumsByUser error: ${err}`)
		return []
	}
}

// export const fetchAlbumsCommunity = async (): Promise<AlbumsCollection> => {
// 	const albums = (await fetch(`${process.env.KV_STORAGE}/albums`, {
// 		method: 'GET',
// 		headers: { 'Content-Type': 'application/json' },
// 	}).then((res) => {
// 		if (!res.ok) {
// 			ze(`[fetchAlbumsCommunity] ${res.status} ${res.statusText}  `)
// 			return []
// 		}
// 		return res.json()
// 	})) as AlbumsCollection

// 	return albums
// }
