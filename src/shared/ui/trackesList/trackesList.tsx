import { ReactNode, useCallback } from 'react'

import { useDraggable } from './hooks/useDrugTrackes'
import { TrackesListItem } from './ui/trackesListItem'
import { TrackesListLabel } from './ui/trackesListLabel'
import { TrackesListSkeleton } from './ui/trackesListSkeleton'

import { DropdownTrack } from '@/app/playlist/ui/piece/dropdownTrack'
import { Track, Trackes, TrackesHash } from '@/shared/api'

export type DropdownProps = {
	deleteHandle: () => void
	track: Track
}

interface TrackViewListingProps {
	relayTrackesId?: TrackesHash
	isCompact: boolean
	isLoadingTrackes: boolean
	trackes?: Trackes
	albumPageId?: string
	type?: 'playlist' | 'all'
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	type = 'playlist',
}) => {
	const rowHeight = isCompact ? 34 : 50
	const isDraggable = type === 'playlist'

	const getCustomButton = useCallback(
		(track: Track): ReactNode => {
			if (type === 'playlist' && albumPageId) {
				return <DropdownTrack albumPageId={albumPageId} track={track} />
			}
			return null
		},
		[type, albumPageId]
	)

	const { reorderedItems, containerRef } = useDraggable({
		initialItems: trackes,
		isDraggable,
		rowHeight,
	})

	if (isLoadingTrackes || (trackes && !reorderedItems)) {
		return (
			<TrackesListSkeleton
				count={relayTrackesId?.length}
				isCompact={isCompact}
			/>
		)
	}

	if (!trackes || trackes.length === 0) {
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	}

	return (
		<div className="relative select-none" ref={containerRef}>
			<TrackesListLabel isCompact={isCompact} />
			{reorderedItems?.map((track, visualIndex) => (
				<TrackesListItem
					key={track.hash ?? track.title}
					data-draggable={isDraggable || undefined}
					data-index={visualIndex}
					position={visualIndex}
					isCompact={isCompact}
					track={track}
					relayTrackesId={relayTrackesId}
					customButton={getCustomButton(track)}
				/>
			))}
		</div>
	)
}
