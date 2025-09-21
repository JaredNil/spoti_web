'use client'
import React from 'react'

import { Track, TrackesHash } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { PlayButton } from '@/shared/ui/playButton/playButton'
import { getTrack } from '@/widgets/player'

interface TrackViewButtonProps {
	relayTrackesId: TrackesHash
	track: Track
	index: number
}

export const TrackesListButton: React.FC<TrackViewButtonProps> = ({
	relayTrackesId,
	track,
	index,
}) => {
	const playerTrack = useAppSelector(getTrack)

	return (
		<>
			<div
				className={`flex items-center justify-center 
				${playerTrack?.hash == track.hash ? `opacity-0` : `opacity-100`}`}
			>
				{index + 1}
			</div>
			<div
				className={`absolute top-0 left-0 w-full h-full 
				flex items-center justify-center
				transition-opacity duration-100 group-hover:opacity-100
				${playerTrack?.hash == track.hash ? `opacity-100` : `opacity-0`}`}
			>
				<div className="w-[80%] aspect-square flex items-center justify-center">
					<PlayButton
						target={index}
						relayTrackesId={relayTrackesId}
						track={track}
						type="track"
					/>
				</div>
			</div>
		</>
	)
}
