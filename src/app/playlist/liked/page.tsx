import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track/model'

export default async function PlaylistPageLiked() {
	const album = await fetchAlbum(0)
	const trackes = await fetchTrackes(album.trackes_id as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
