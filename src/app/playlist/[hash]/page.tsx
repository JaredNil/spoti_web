import { Cover } from '../ui/cover'
import { TrackesView } from '../ui/trackesView'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ hash: string }>
}) {
	const { hash } = await params

	return (
		<>
			<Cover albumHash={hash} />
			<TrackesView albumHash={hash} />
		</>
	)
}
