'use client'

import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

import { Track } from '@/shared/api/track'
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
	trackesId: number[]
}) {
	const currentTarget = useAppSelector(getPlayerTarget)
	return (
		<div
			className="relative flex items-center justify-between overflow-hidden
				h-auto transition-all
				cursor-pointer gap-x-4 rounded-md
				bg-neutral-100/10  hover:bg-neutral-100/20
				md:flex-row flex-col md:h-24 md:pr-4 pt-6 md:pt-0"
		>
			<div
				className="flex h-full  pointer-events-none select-none
					md:flex-row flex-col md:items-end items-center"
			>
				<div className="relative h-full aspect-square ">
					<Image
						src={track.imageLink || '/homepage/1235.png'}
						alt={track.title}
						width={60}
						height={60}
						className={`h-full w-full ${currentTarget && target < currentTarget && 'blur-xs grayscale'}`}
					/>
				</div>
				<div
					className="md:pl-3 h-full flex flex-col justify-evenly 
						md:items-start items-center"
				>
					<p
						className={`truncate text-2xl font-medium text-neutral-100 py-2
						${currentTarget && target < currentTarget && 'text-neutral-500'} `}
					>
						{track.title}
					</p>
					<p
						className={`truncate text-sm text-neutral-400"
						${currentTarget && target < currentTarget && 'text-neutral-500'} `}
					>
						{track.author}
					</p>
				</div>
			</div>
			<div
				className="flex justify-center items-center gap-x
			relative w-22 md:w-30 py-16 md:py-0"
			>
				{/* REFACTOR LIKE FEATURE IN FUTURE */}
				<div className="cursor-pointer items-center md:w-20 justify-center">
					{/* <FaRegHeart fill="rgba(255, 0, 0, 1)" /> */}
					<FaHeart fill="rgba(255, 0, 0, 1)" />
				</div>
				<PlayButton
					relayTrackesId={trackesId}
					target={target}
					track={track}
				/>
			</div>
		</div>
	)
}
