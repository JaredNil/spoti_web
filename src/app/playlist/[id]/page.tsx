import { redirect } from 'next/navigation'

import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { AlbumInterface, fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track'
import { Trackes } from '@/shared/api/track'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	let album: AlbumInterface
	let trackes: Trackes

	try {
		album = await fetchAlbum(Number(id))
		trackes = await fetchTrackes(album.trackes_id as number[])
	} catch (error) {
		console.warn('Handle error fetch in playlist page', error)
		redirect('/home')
	}

	return (
		<>
			<PlaylistTitle album={album} />
			<TrackViewVender trackes={trackes} album={album} />
		</>
	)
}
