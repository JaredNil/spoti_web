import { twMerge } from 'tailwind-merge'

import { baseRow, compactRow } from './grid'

interface Props {
	isCompact: boolean
	count?: number
}

export const TrackesListSkeleton = ({ isCompact, count = 4 }: Props) => (
	<>
		{Array.from({ length: count }).map((_, i) => (
			<div
				key={i}
				className={twMerge(
					`grid rounded-xl relative
					transition-colors bg-transparent
					before:absolute before:left-1/2 before:top-0
					before:h-px before:w-full before:-translate-x-1/2
					before:bg-neutral-400/10`,

					isCompact ? compactRow : baseRow,
					isCompact ? 'h-[34px]' : 'h-[50px]'
				)}
			>
				<div className="flex items-center justify-center">
					<span className="h-4 w-6 rounded bg-neutral-700 animate-pulse" />
				</div>

				<div
					className={twMerge(
						'flex items-center justify-center',
						isCompact && 'hidden'
					)}
				>
					<div className="w-10 aspect-square rounded bg-neutral-700 animate-pulse" />
				</div>

				<div className="flex items-center truncate px-2">
					<div className="h-4 w-3/5 rounded bg-neutral-700 animate-pulse" />
				</div>

				<div
					className={twMerge(
						'hidden lg:flex items-center',
						isCompact && 'hidden'
					)}
				>
					<div className="h-4 w-2/5 rounded bg-neutral-700 animate-pulse" />
				</div>

				<div
					className={twMerge(
						'hidden lg:flex items-center',
						isCompact && 'hidden'
					)}
				>
					<div className="h-5 w-5 rounded bg-neutral-700 animate-pulse" />
				</div>

				<div className="flex items-center justify-end pr-2">
					<div className="h-6 w-6 rounded bg-neutral-700 animate-pulse" />
				</div>
			</div>
		))}
	</>
)
