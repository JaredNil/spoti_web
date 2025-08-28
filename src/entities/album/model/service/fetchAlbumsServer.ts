import { ALBUMS } from '../../../../../public/content/ALBUMS_CONTENT'

export async function fetchAlbumsServer(user_id: number) {
	const albums = ALBUMS.filter((album) => {
		if (album.user_id === user_id) {
			return album
		}
	})
	return albums
}
