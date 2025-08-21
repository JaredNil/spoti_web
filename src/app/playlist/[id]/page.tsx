import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView'

import { fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track'

export default async function PlaylistPage({
	params,
}: {
	params: { id: string }
}) {
	const { id } = await params
	const album = await fetchAlbum(Number(id))
	const trackes = await fetchTrackes(album.trackes_id)

	return (
		<div className="flex w-full flex-col">
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} />
			{/* {isShowTrackModal && <TrackMdal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />} */}
		</div>
	)
}
