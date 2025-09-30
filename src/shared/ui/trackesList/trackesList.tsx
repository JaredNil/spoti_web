import {
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'

import { useDragTrackes } from './hooks/useDrugTrackes'
import { DraggableTrackesListItem } from './ui/draggableTrackesListItem'
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
	isDrag?: true | false
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	type = 'playlist',
	isDrag = false,
}) => {
	const getCustomButton = useCallback(
		(track: Track): ReactNode => {
			if (type === 'playlist' && albumPageId) {
				return <DropdownTrack albumPageId={albumPageId} track={track} />
			}
			return null
		},
		[type, albumPageId]
	)
	/* локальный порядок треков */

	const [order, setOrder] = useState(() =>
		trackes ? trackes.map((_, i) => i) : []
	)
	useEffect(() => {
		if (trackes) setOrder(trackes.map((_, i) => i))
	}, [trackes])

	const moveItem = useCallback((dragIndex: number, dropIndex: number) => {
		setOrder((prev) => {
			const next = [...prev]
			const [removed] = next.splice(dragIndex, 1)
			next.splice(dropIndex, 0, removed)
			return next
		})
	}, [])

	/* ... */
	/* ... */
	/* ... */
	/* ... */
	/* ... */
	/* ... */
	/* ... */
	if (isLoadingTrackes)
		return (
			<TrackesListSkeleton
				count={relayTrackesId?.length}
				isCompact={isCompact}
			/>
		)

	if (!trackes || trackes.length === 0)
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	return (
		<div className="relative select-none">
			<TrackesListLabel isCompact={isCompact} />
			{!isDrag &&
				trackes?.map((track, i) => (
					<TrackesListItem
						key={track.hash ?? track.title}
						position={i}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
						customButton={getCustomButton(track)}
					/>
				))}
			{/* {!isDrag &&
				order.map((originalIndex, visualIndex) => {
					const track = trackes[originalIndex]
					return (
						<TrackesListItem
							key={track.hash ?? track.title}
							position={visualIndex}
							isCompact={isCompact}
							relayTrackesId={relayTrackesId}
							track={track}
							customButton={getCustomButton(track)}
						/>
					)
				})} */}
		</div>
	)
}
