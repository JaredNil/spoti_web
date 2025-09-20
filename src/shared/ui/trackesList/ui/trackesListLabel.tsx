import { twMerge } from 'tailwind-merge'

import { baseRow, compactRow } from './grid'

import { Icons } from '@/shared/icons'

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
			<div className={isCompact ? 'hidden' : ''} />
			<div className="hidden lg:block">Author </div>
			<div
				className="hidden lg:flex
				items-center justify-center"
			>
				<Icons name="Heart" />
			</div>
			<div className="flex items-center justify-center">
				<Icons name="Rectangle" />
			</div>
		</div>
	)
}
