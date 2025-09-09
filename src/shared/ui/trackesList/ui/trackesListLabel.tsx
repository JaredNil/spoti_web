import { RectangleEllipsis } from 'lucide-react'
import { FaRegHeart } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

export const TrackesListLabel = ({ isCompact }: { isCompact: boolean }) => {
	return (
		<div
			className={twMerge(
				`playlist__table grid w-full flex-col items-center`,
				isCompact && 'playlist__compact',
				'h-6'
			)}
		>
			<div className="table-id pointer-events-none select-none text-center">
				#
			</div>
			<div className=" pointer-events-none select-none font-extralight">
				Naming
			</div>
			<div className="table-image" />
			<div className="table-data pointer-events-none select-none">
				Author
			</div>
			<div className="flex items-center justify-center">
				<FaRegHeart fill="rgba(255, 0, 0, 1)" />
			</div>
			<div className="flex items-center justify-center">
				<RectangleEllipsis />
			</div>
		</div>
	)
}
