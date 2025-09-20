import React from 'react'
import { twMerge } from 'tailwind-merge'

import { TrackesListLabel } from './trackesListLabel'

interface TrackesListSkeletonProps {
	isCompact: boolean
}
const arr = new Array(8).fill('').map((_, i) => String(i))
export const TrackesListSkeleton: React.FC<TrackesListSkeletonProps> = ({
	isCompact,
}) => (
	<div className="playlist__wrapper">
		<TrackesListLabel isCompact={isCompact} />
		{arr.map((track, i) => (
			<div
				key={track}
				className={twMerge(
					`playlist__table grid w-full flex-col items-center 
					h-[50px] overflow-hidden
					rounded-xl transition hover:bg-neutral-400/5`,
					isCompact && 'playlist__compact'
				)}
			>
				<div
					className="table-id pointer-events-none 
					select-none text-center"
				>
					{i + 1}
				</div>
				<div className="w-full h-3/5 " />
				<div
					className="w-[150px] h-3/5 
					rounded-lg
					bg-neutral-700 animate-pulse"
				/>
				<div
					className="w-[150px] h-3/5 
						rounded-lg
						bg-neutral-700 animate-pulse"
				/>
				<div
					className="w-[50px] h-3/5 
					rounded-lg
					bg-neutral-700 animate-pulse"
				/>
			</div>
		))}
	</div>
)
