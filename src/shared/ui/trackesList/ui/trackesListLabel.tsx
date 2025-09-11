import { RectangleEllipsis } from 'lucide-react'
import { FaRegHeart } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { baseRow, compactRow } from './grid'

export const TrackesListLabel = ({ isCompact }: { isCompact: boolean }) => {
	return (
		<div
			className={twMerge(
				`h-6 grid proximity-border`,
				isCompact ? compactRow : baseRow,
				'*:pointer-events-none *:select-none'
			)}
		>
			<div className="text-center">#</div>
			<div className="font-extralight">Naming</div>
			<div />
			<div className="hidden lg:block">Author</div>
			<div
				className="hidden lg:flex
				items-center justify-center"
			>
				<FaRegHeart fill="rgba(255, 0, 0, 1)" />
			</div>
			<div className="flex items-center justify-center">
				<RectangleEllipsis />
			</div>
		</div>
	)
}
