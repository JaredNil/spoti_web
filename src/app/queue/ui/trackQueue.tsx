'use client'

import Image from 'next/image'

import { Track, TrackesHash } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { PlayButton } from '@/shared/ui/playButton/playButton'
import { TrackesListLike } from '@/shared/ui/trackesList/ui/trackesListLike'
import { getPlayerTarget } from '@/widgets/player'

export function TrackQueue({
	track,
	target,
	trackesHash,
	isDraggable = true,
}: {
	track: Track
	target: number
	trackesHash: TrackesHash
	isDraggable?: boolean
}) {
	const currentTarget = useAppSelector(getPlayerTarget)
	return (
		<div
			data-draggable={isDraggable || undefined}
			data-index={target}
			className="relative flex flex-row items-center overflow-hidden
				cursor-pointer rounded-md transition-all
				bg-neutral-100/10 hover:bg-neutral-100/20
				h-24 px-2 sm:px-4"
		>
			{/* Основной контент трека */}
			<div className="flex h-full flex-1 relative pointer-events-none select-none items-center min-w-0">
				<div className="h-full aspect-square flex-shrink-0">
					<Image
						src={'/homepage/1235.png'}
						alt={track.title}
						width={60}
						height={60}
						className={`h-full w-full rounded ${currentTarget && target < currentTarget && 'blur-xs grayscale'}`}
					/>
				</div>
				<div className="pl-3 h-full flex-1 flex flex-col justify-center min-w-0">
					<div
						className={`truncate w-full text-base sm:text-lg font-medium text-neutral-100
						${currentTarget && target < currentTarget && 'text-neutral-500'}`}
					>
						{track.title}
					</div>
					<p
						className={`truncate text-xs sm:text-sm text-neutral-400
						${currentTarget && target < currentTarget && 'text-neutral-500'}`}
					>
						{track.author}
					</p>
				</div>
			</div>

			{/* Кнопки управления */}
			<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
				{/* Кнопка лайка */}
				<div
					data-heart-button
					className="w-8 h-8 flex items-center justify-center"
				>
					<TrackesListLike
						trackHash={track.hash}
						classname="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 hover:text-red-400 transition-colors"
					/>
				</div>

				{/* Кнопка воспроизведения */}
				<div className="w-12 sm:w-16 play-button">
					<PlayButton
						type="track"
						relayTrackesId={trackesHash}
						target={target}
						track={track}
					/>
				</div>
			</div>
		</div>
	)
}
