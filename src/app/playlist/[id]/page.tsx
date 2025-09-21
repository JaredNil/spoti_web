import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesView } from '../ui/trackesView'

import { fetchAlbumById } from '@/app/api/album/handler'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const album = await fetchAlbumById(id)

	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesView albumHash={id} />
		</>
	)
}
