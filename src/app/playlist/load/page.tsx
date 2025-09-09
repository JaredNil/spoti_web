import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesView } from '../ui/trackesView'

import { fetchAlbumById } from '@/app/api/album/handler'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const albumId = '2'
	const album = await fetchAlbumById(albumId)

	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesView albumId={albumId} />
		</>
	)
}
