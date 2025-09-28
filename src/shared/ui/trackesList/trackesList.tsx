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
	// REFACTOR - Добавить предикат drug для null обработчиков, экономия памяти
	const [localTrackes, setLocalTrackes] = useState(trackes)
	useEffect(() => setLocalTrackes(trackes), [trackes])

	// REFACTOR - Добавить предикат drug для null обработчиков, экономия памяти
	const {
		containerRef,
		draggedIdx,
		isReturning,
		pos,
		handleDragStart,
		handleMouseMove,
		handleMouseUp,
		handleMouseLeave,
		handleTransitionEnd,
		measureItemHeight,
	} = useDragTrackes(trackes, setLocalTrackes)

	// REFACTOR - Добавить предикат drug для null обработчиков, экономия памяти
	useEffect(() => measureItemHeight(), [localTrackes, measureItemHeight])

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
		<div
			ref={containerRef}
			className="relative select-none"
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
		>
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
			{isDrag &&
				localTrackes?.map((track, i) => (
					<DraggableTrackesListItem
						key={track.hash ?? track.title}
						isDragged={false}
						style={{}}
					>
						<TrackesListItem
							key={track.hash ?? track.title}
							position={i}
							isCompact={isCompact}
							relayTrackesId={relayTrackesId}
							track={track}
							customButton={getCustomButton(track)}
							onDragStart={(e) => handleDragStart(e, i)}
						/>
					</DraggableTrackesListItem>
				))}
			{/* goust for drug events */}
			{isDrag &&
				draggedIdx !== null &&
				localTrackes &&
				localTrackes[draggedIdx] && (
					<div
						className="fixed left-0 top-0 w-full
						will-change-transform  bg-[#121212]
						pointer-events-none"
						style={{
							transform: `translate(${pos.x}px, ${pos.y}px)`,
							transition: isReturning
								? 'transform 180ms ease-out'
								: undefined,
							zIndex: 999,
						}}
						onTransitionEnd={handleTransitionEnd}
					>
						<TrackesListItem
							position={draggedIdx}
							isCompact={isCompact}
							relayTrackesId={relayTrackesId}
							track={localTrackes[draggedIdx]}
							customButton={getCustomButton(
								localTrackes[draggedIdx]
							)}
						/>
					</div>
				)}
		</div>
	)
}
