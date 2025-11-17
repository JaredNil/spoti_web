import { Track } from '@/entities/track'
import { TrackPageTitle } from './trackPageTitle'

// export async function generateMetadata({
// 	params,
// }: {
// 	params: Promise<{ id: string }>
// }): Promise<Metadata> {
// 	const { id } = await params

// 	return createMeta({
// 		title: id,
// 	})
// }

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<>
			<TrackPageTitle />
			<Track hash={id} />
		</>
	)
}
