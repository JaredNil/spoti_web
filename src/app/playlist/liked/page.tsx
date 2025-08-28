import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbumServer } from '@/entities/album'
import { fetchTrackesServer } from '@/entities/track'

export default async function PlaylistPageLiked() {
	const album = await fetchAlbumServer(1)
	const trackes = await fetchTrackesServer(album.trackesId as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
