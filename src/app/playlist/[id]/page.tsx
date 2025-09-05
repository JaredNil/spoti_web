import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

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
			<PlaylistTitle albumId={id} albumPreload={album} />
			<TrackViewVender albumId={id} albumPreload={album} />
		</>
	)
}
