import { ReactNode, useCallback } from 'react'

import { useDraggable } from './hooks/useDrugTrackes'
import { TrackesListItem } from './ui/trackesListItem'
import { TrackesListLabel } from './ui/trackesListLabel'
import { TrackesListSkeleton } from './ui/trackesListSkeleton'

import { DropdownTrack } from '@/app/playlist/ui/piece/dropdownTrack'
import { useAlbumActions } from '@/entities/album'
import { Album, Track, Trackes, TrackesHash } from '@/shared/api'

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
	albumData?: Album
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	type = 'playlist',
	albumData,
}) => {
	const rowHeight = isCompact ? 34 : 50
	const isDraggable = type === 'playlist'

	const { updateTrackOrder } = useAlbumActions()

	const getCustomButton = useCallback(
		(track: Track): ReactNode => {
			if (type === 'playlist' && albumPageId) {
				return <DropdownTrack albumPageId={albumPageId} track={track} />
			}
			return null
		},
		[type, albumPageId]
	)

	const handleOrderChange = useCallback(
		(newOrder: number[]) => {
			if (albumData && trackes) {
				updateTrackOrder(newOrder, albumData, trackes)
			}
		},
		[updateTrackOrder, albumData, trackes]
	)

	const { containerRef } = useDraggable({
		items: trackes,
		isDraggable,
		rowHeight,
		onOrderChange: isDraggable ? handleOrderChange : undefined,
	})

	if (isLoadingTrackes) {
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
			{trackes.map((track, visualIndex) => (
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
