import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbumById } from '@/app/api/album/handler'
import { fetchTrackesServer } from '@/entities/track'

export default async function PlaylistPageLiked() {
	const album = await fetchAlbumById('1')
	const trackes = await fetchTrackesServer(album.trackesId as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
