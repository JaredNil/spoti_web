import { PlaylistTitleLoad } from './playlistTitleLoad'
import { TrackesViewLoad } from './trackesViewLoad'

export default async function PlaylistPageLoaded() {
	return (
		<>
			<PlaylistTitleLoad />
			<TrackesViewLoad />
		</>
	)
}
