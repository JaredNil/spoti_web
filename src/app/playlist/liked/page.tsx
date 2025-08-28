import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbum } from '@/entities/album'
import { fetchTrackesServer } from '@/entities/track'

export default async function PlaylistPageLiked() {
	const album = await fetchAlbum(1)
	const trackes = await fetchTrackesServer(album.trackesId as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
