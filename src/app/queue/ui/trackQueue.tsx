'use client'

import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

import { Track, TrackesId } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { PlayButton } from '@/shared/ui/playButton/playButton'
import { getPlayerTarget } from '@/widgets/player'

export function TrackQueue({
	track,
	target,
	trackesId,
}: {
	track: Track
	target: number
	trackesId: TrackesId
}) {
	const currentTarget = useAppSelector(getPlayerTarget)
	return (
		<div
			className="relative flex flex-row items-center justify-between overflow-hidden
				cursor-pointer gap-x-4 rounded-md transition-all
				bg-neutral-100/10  hover:bg-neutral-100/20
				h-24 pr-4 pt-0"
		>
			<div
				className="flex h-full w-3/4 relative pointer-events-none select-none 
					items-center"
			>
				<div className="h-full aspect-square ">
					<Image
						src={'/homepage/1235.png'}
						alt={track.title}
						width={60}
						height={60}
						className={`h-full w-full ${currentTarget && target < currentTarget && 'blur-xs grayscale'}`}
					/>
				</div>
				<div className="pl-3 h-full w-[70%] flex flex-col justify-evenly items-start">
					<div
						className={`truncate w-full text-lg sm:text-2xl font-medium text-neutral-100 py-2
						
						${currentTarget && target < currentTarget && 'text-neutral-500'} `}
					>
						{track.title}
					</div>
					<p
						className={`truncate text-xs sm:text-sm text-neutral-400"
						${currentTarget && target < currentTarget && 'text-neutral-500'} `}
					>
						{track.author}
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center gap-x min-w-24 absolute right-2">
				{/* REFACTOR LIKE FEATURE IN FUTURE */}
				<div className="cursor-pointer items-center justify-center mr-2">
					{/* <FaRegHeart fill="rgba(255, 0, 0, 1)" /> */}
					<FaHeart fill="rgba(255, 0, 0, 1)" />
				</div>
				<div className="w-16">
					<PlayButton
						type="track"
						relayTrackesId={trackesId}
						target={target}
						track={track}
					/>
				</div>
			</div>
		</div>
	)
}
