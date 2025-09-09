import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesViewAll } from '../ui/trackesViewAll'

import { AlbumInterface } from '@/shared/api'

export default async function PlaylistPageLoaded() {
	// REFACTOR LOGIC - NEED RETURN ID USER INSTEAD 1
	const album: AlbumInterface = {
		author: 'all users',
		title: 'all tracks',
		description: 'all tracks',
		creationDate: '2023-01-01',
		id: '1',
		trackesId: [],
		user_id: '1',
	}
	return (
		<>
			<PlaylistTitle albumPreload={album} />
			<TrackesViewAll />
		</>
	)
}
