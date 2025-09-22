import { PlaylistTitleLoad } from '../ui/playlistTitleLoad'
import { TrackesViewLoad } from '../ui/trackesViewLoad'

export default async function PlaylistPageLoaded() {
	return (
		<>
			<PlaylistTitleLoad />
			<TrackesViewLoad />
		</>
	)
}
