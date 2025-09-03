import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbumById } from '@/app/api/album/handler'
import { fetchMetaTrackesServer } from '@/app/api/track/handlerMeta'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const album = await fetchAlbumById('2')
	const trackes = await fetchMetaTrackesServer(album.trackesId)

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
