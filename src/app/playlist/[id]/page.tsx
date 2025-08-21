import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView'

import { fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	console.log('render page', id)
	const album = await fetchAlbum(Number(id))
	const trackes = await fetchTrackes(album.trackes_id as number[])

	return (
		<div className="flex w-full flex-col">
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} albumIds={album?.trackes_id} />

			{/* {isShowTrackModal && <TrackMdal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />} */}
		</div>
	)
}
