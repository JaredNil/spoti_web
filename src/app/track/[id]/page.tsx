import { Track } from '@/entities/track'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { id: string }
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
			<Title title={'Track page'} />
			<Track hash={id} />
		</>
	)
}
