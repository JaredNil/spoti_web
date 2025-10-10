import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

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
	isDraggable?: true | false
}

gsap.registerPlugin(Draggable)

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	type = 'playlist',
	isDraggable = true,
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
	const [order, setOrder] = useState<number[]>(() =>
		trackes ? trackes.map((_, i) => i) : []
	)

	useEffect(() => {
		if (trackes) setOrder(trackes.map((_, i) => i))
	}, [trackes])

	const listRef = useRef<HTMLDivElement | null>(null)
	const rowHeight = isCompact ? 34 : 50

	useEffect(() => {
		console.log('gsap effect')
		console.log(listRef.current)
		if (!listRef.current || !isDraggable) return
		console.log('gsap effect')
		const rows = Array.from(
			listRef.current.querySelectorAll<HTMLDivElement>('[data-draggable]')
		)
		console.log(rows)
		if (!rows.length) return

		rows.forEach((row) => {
			const drag = Draggable.create(row, {
				type: 'y',
				bounds: listRef.current!,
				onDragStart() {
					console.log('start')
					gsap.set(row, { zIndex: 10, scale: 1.05 })
				},
				onDrag() {
					const y = this.y
					const currentIndex = Number(row.dataset.index)
					const newIndex = Math.round(
						(y + currentIndex * rowHeight) / rowHeight
					)

					/* визуально сдвигаем соседей */
					rows.forEach((r) => {
						const idx = Number(r.dataset.index)
						if (idx === currentIndex) return
						const shift =
							idx > currentIndex &&
							newIndex > currentIndex &&
							idx <= newIndex
								? -rowHeight
								: idx < currentIndex &&
									  newIndex < currentIndex &&
									  idx >= newIndex
									? rowHeight
									: 0
						gsap.to(r, {
							y: shift,
							duration: 0.25,
							ease: 'power2.out',
						})
					})
				},
				onDragEnd() {
					const y = this.y
					const currentIndex = Number(row.dataset.index)
					let newIndex = Math.round(
						(y + currentIndex * rowHeight) / rowHeight
					)
					newIndex = Math.max(0, Math.min(rows.length - 1, newIndex))

					/* возвращаем визуально на место */
					gsap.to(row, {
						y: 0,
						scale: 1,
						zIndex: 1,
						duration: 0.3,
						ease: 'power2.out',
					})
					rows.forEach((r) => gsap.to(r, { y: 0, duration: 0.3 }))

					/* обновляем порядок */
					if (newIndex !== currentIndex) {
						setOrder((prev) => {
							const copy = [...prev]
							const [moved] = copy.splice(currentIndex, 1)
							copy.splice(newIndex, 0, moved)
							return copy
						})
					}
				},
			})[0]

			/* чистим */
			return () => drag.kill()
		})
	}, [listRef.current, isCompact])

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
		<div className="relative select-none" ref={listRef}>
			<TrackesListLabel isCompact={isCompact} />
			{/* {!isDraggable &&
				trackes?.map((track, i) => (
					<TrackesListItem
						key={track.hash ?? track.title}
						position={i}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
						customButton={getCustomButton(track)}
					/>
				))} */}
			{order.map((originalIndex, visualIndex) => (
				<TrackesListItem
					key={
						trackes[originalIndex].hash ??
						trackes[originalIndex].title
					}
					data-draggable={isDraggable || undefined}
					data-index={originalIndex}
					position={visualIndex}
					isCompact={isCompact}
					track={trackes[originalIndex]}
					relayTrackesId={relayTrackesId}
					customButton={getCustomButton(trackes[originalIndex])}
				/>
			))}
		</div>
	)
}
