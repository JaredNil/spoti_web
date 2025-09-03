import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbumById } from '@/app/api/album/handler'
import { fetchMetaTrackesServer } from '@/app/api/track/handlerMeta'

export default async function PlaylistPageLiked() {
	const album = await fetchAlbumById('1')
	const trackes = await fetchMetaTrackesServer(album.trackesId as string[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
