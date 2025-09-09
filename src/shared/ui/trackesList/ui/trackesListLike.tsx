import { FaHeart } from 'react-icons/fa'

export const TrackesListLike = () => {
	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
	}

	return (
		<div
			className="flex items-center justify-center
	cursor-pointer"
			onClick={onLikeTrack}
		>
			{/* <FaRegHeart fill="rgba(255, 0, 0, 1)" /> */}
			<FaHeart fill="rgba(255, 0, 0, 1)" />
		</div>
	)
}
