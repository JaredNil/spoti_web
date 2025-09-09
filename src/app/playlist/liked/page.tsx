import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesView } from '../ui/trackesView'

import { fetchAlbumById } from '@/app/api/album/handler'

export default async function PlaylistPageLiked() {
	const albumId = '1'
	const album = await fetchAlbumById(albumId)

	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesView albumId={albumId} />
		</>
	)
}
