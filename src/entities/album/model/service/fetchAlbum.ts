import { ALBUMS } from '../../../../../public/content/ALBUMS_CONTENT'

import { AlbumInterface } from '@/shared/api/album'

export async function fetchAlbum(album_id: number): Promise<AlbumInterface> {
	const albums = ALBUMS.filter((album) => {
		if (album.id === album_id) {
			return album
		}
	})
	return albums[0]
}
