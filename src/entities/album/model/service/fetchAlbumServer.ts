import { ALBUMS } from '../../../../../public/content/ALBUMS_CONTENT'

import { AlbumInterface } from '@/shared/api'

export async function fetchAlbumServer(
	album_id: number
): Promise<AlbumInterface> {
	const albums = ALBUMS.filter((album) => {
		if (album.id === album_id) {
			return album
		}
	})
	return albums[0]
}
