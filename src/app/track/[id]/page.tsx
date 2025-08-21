import TrackPageHeader from '../ui/trackPageHeader'

import { Track } from '@/entities/track'

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<>
			<TrackPageHeader title={'Track page'} />
			<Track id={Number(id)} />
		</>
	)
}
