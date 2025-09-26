import React from 'react'

import { useAlbumActions } from '@/entities/album'
import { Track, Trackes, TrackesHash } from '@/shared/api'
import { ze } from '@/shared/lib/log'
import { Button } from '@/shared/ui/kit/button'
import { TrackesListItem } from '@/shared/ui/trackesList/ui/trackesListItem'
import { TrackesListLabel } from '@/shared/ui/trackesList/ui/trackesListLabel'
import { TrackesListSkeleton } from '@/shared/ui/trackesList/ui/trackesListSkeleton'

interface TrackViewListingProps {
	relayTrackesId: TrackesHash
	isCompact: boolean
	isLoadingEditTrackes: boolean
	trackes: Trackes
	classname: string
	albumPageId?: string
}

export const TrackesEditList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingEditTrackes,
	trackes,
	classname,
	albumPageId = undefined,
}: TrackViewListingProps) => {
	const { addTrack, isUpdatingTrack } = useAlbumActions()

	const addTrackClick = (track: Track, albumPageId?: string) => {
		if (!albumPageId) ze('albumPageId не определена')
		else addTrack(track, albumPageId)
	}

	if (isLoadingEditTrackes)
		return <TrackesListSkeleton isCompact={isCompact} />

	if (!trackes || trackes.length === 0)
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	else
		return (
			<div className={`playlist__wrapper ${classname}`}>
				<TrackesListLabel isCompact={isCompact} />
				{trackes?.map((track, i) => (
					<TrackesListItem
						position={i}
						key={track.hash}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
						customButton={
							<div
								className="flex cursor-pointer 
								items-center justify-center"
							>
								<Button
									disabled={isUpdatingTrack}
									onClick={() =>
										addTrackClick(track, albumPageId)
									}
									className="py-1 px-2 text-sm
										 text-neutral-700 bg-green-500 rounded-lg
										hover:bg-green-600/70 transition-colors
										"
								>
									Add
								</Button>
							</div>
						}
					/>
				))}
			</div>
		)
}
