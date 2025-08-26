import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const album = await fetchAlbum(2)
	const trackes = await fetchTrackes(album.trackes_id as number[])

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
