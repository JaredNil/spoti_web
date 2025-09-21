import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesViewAll } from '../ui/trackesViewAll'

import { Album } from '@/shared/api'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const album: Album = {
		hash: '1',
		author: 'all users',
		title: 'all tracks',
		description: 'all tracks',
		creationDate: '2023-01-01',
		trackesHash: [],
	}
	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesViewAll />
		</>
	)
}
