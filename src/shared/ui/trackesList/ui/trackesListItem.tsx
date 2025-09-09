import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { TrackesListLike } from './trackesListLike'
import { TrackesListSearch } from './trackesListSearch'
import { TrackViewButton } from './trackViewButton'

import { Track, TrackesId } from '@/shared/api'

interface TrackesListItemProps {
	relayTrackesId?: TrackesId
	track: Track
	isCompact: boolean
	customButton?: React.ReactNode
	index: number
}

export const TrackesListItem: FC<TrackesListItemProps> = ({
	track,
	relayTrackesId,
	isCompact,
	index,
	customButton,
}) => (
	<div
		className={twMerge(
			`playlist__table grid
			w-full h-[50px] flex-col items-center justify-center 
			group rounded-xl transition hover:bg-neutral-400/5`,
			isCompact && 'playlist__compact'
		)}
	>
		<div
			className="h-full text-center
			relative overflow-hidden
			pointer-events-none select-none
			flex items-center justify-center"
		>
			<div className="relative w-full aspect-square">
				{relayTrackesId && (
					<TrackViewButton
						index={index}
						relayTrackesId={relayTrackesId}
						track={track}
					/>
				)}
			</div>
		</div>
		<div className="table-image h-full flex items-center justify-center">
			<Image
				className="lg:w-[100%] w-[60%] aspect-square select-none"
				src={'/content/cover/heavy_metal.webp'}
				width={20}
				height={20}
				alt="track image"
			/>
		</div>
		<div
			className="truncate h-full pl-2 
				flex items-center leading-none
				select-none cursor-pointer"
		>
			<Link href={`/track/${track.id}`}>{track.title}</Link>
		</div>
		<TrackesListSearch author={track.author} />
		<TrackesListLike />
		{customButton || <div className="h-[50px] aspect-square"></div>}
	</div>
)
