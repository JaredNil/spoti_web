import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbumServer } from '@/entities/album'
import { fetchTrackesServer } from '@/entities/track'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const album = await fetchAlbumServer(2)
	const trackes = await fetchTrackesServer(album.trackesId as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
