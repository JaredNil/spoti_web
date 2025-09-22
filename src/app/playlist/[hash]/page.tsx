import { PlaylistTitle } from '../ui/playlistTitle'
import { TrackesView } from '../ui/trackesView'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ hash: string }>
}) {
	const { hash } = await params

	return (
		<>
			<PlaylistTitle albumHash={hash} />
			<TrackesView albumHash={hash} />
		</>
	)
}
