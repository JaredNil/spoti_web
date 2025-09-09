import React from 'react'

import { TrackesListItem } from './ui/trackesListItem'
import { TrackesListLabel } from './ui/trackesListLabel'
import { TrackesListSkeleton } from './ui/trackesListSkeleton'

import { Trackes, TrackesId } from '@/shared/api'

interface TrackViewListingProps {
	relayTrackesId?: TrackesId
	isCompact: boolean
	isLoadingTrackes: boolean
	trackes?: Trackes
	classname: string
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	trackes,
	classname,
}) => {
	if (isLoadingTrackes) return <TrackesListSkeleton isCompact={isCompact} />

	if (!trackes || trackes.length === 0)
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	else
		return (
			<div className={`playlist__wrapper ${classname}`}>
				<TrackesListLabel isCompact />
				{trackes?.map((track, i) => (
					<TrackesListItem
						index={i}
						key={track.id + i.toString()}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
					/>
				))}
			</div>
		)
}
