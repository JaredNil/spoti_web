import { redirect } from 'next/navigation'

import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackViewVender } from '../ui/trackView/trackView'

import { AlbumInterface, fetchAlbum } from '@/entities/album'
import { fetchTrackes } from '@/entities/track'
import { fetchAllTrackes } from '@/entities/track/model/fetchAllTrackes'
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
		if (album.id === 0) trackes = await fetchAllTrackes()
		else trackes = await fetchTrackes(album.trackes_id as number[])
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
