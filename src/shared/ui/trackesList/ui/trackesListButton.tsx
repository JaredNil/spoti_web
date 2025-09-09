'use client'
import React from 'react'

import { Track, TrackesId } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { PlayButton } from '@/shared/ui/playButton/playButton'
import { getTrack } from '@/widgets/player'

interface TrackViewButtonProps {
	relayTrackesId: TrackesId
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
				className={`h-full w-full flex items-center justify-center relative
			${playerTrack?.id == track.id ? `opacity-0` : `opacity-100`}
			`}
			>
				{index + 1}
			</div>
			<div
				className={`absolute top-0 left-0 overflow-hidden h-full w-full
			flex items-center justify-center
			transition-all duration-100
			group-hover:opacity-100
			${playerTrack?.id == track.id ? `opacity-100` : `opacity-0`}
			`}
			>
				<div className="w-[80%] h-[80%] flex items-center justify-center">
					<PlayButton
						key={track.id}
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
