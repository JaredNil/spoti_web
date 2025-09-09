import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesView } from '../ui/trackesView'

import { fetchAlbumById } from '@/app/api/album/handler'
// import { fetchMetaTrackesServer } from '@/app/api/track/handlerMeta'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const album = await fetchAlbumById(id)
	// const trackes = await fetchMetaTrackesServer(album.trackesId)

	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesView albumId={id} />
		</>
	)
}
