import { Icons } from '@/shared/icons'

export const TrackesListLike = ({ classname }: { classname?: string }) => {
	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
	}

	return (
		<div
			className={`flex items-center justify-center
			cursor-pointer ${classname}`}
			onClick={onLikeTrack}
		>
			<Icons name="Heart" />
		</div>
	)
}
