'use client'

import { useEffect, useRef, useState } from 'react'

import { useDebounce } from '../model/hook/useDebounce'
import { useElementWidth } from '../model/hook/useElementWidth'
import { formatDuration } from '../model/lib/formatDuration'
import { getPlayerLineData, getTrack } from '../model/selector/playerSelector'

import { useCurrentTrack } from '@/app/(providers)/playerProvider'
import { cachedOrRemote } from '@/app/(providers)/playerProvider/lib/cachedOrRemote'
import { WaveLine } from '@/features/wave'
import { buildWaveform } from '@/features/wave/model/lib/buildWaveform'
import { useAppSelector } from '@/shared/hooks'

const DEBOUNCE_DELAY = 15

const PIXEL_PER_PEAK = 1
const GAP = 0.5

export const PlayerLine = () => {
	const { shift } = useCurrentTrack()
	const debouncedShift = useDebounce(shift, DEBOUNCE_DELAY)

	const lineRef = useRef<HTMLDivElement>(null)
	const lineWidth = useElementWidth(lineRef)

	const { timer, duration, progress } = useAppSelector(getPlayerLineData)
	const completedWidth = lineWidth ? (progress / 100) * lineWidth : 0

	const track = useAppSelector(getTrack)

	// const [peaks, setPeaks] = useState<number[]>([])

	// EXPERIMENTAL
	// useEffect(() => {
	// 	console.log('render lineWidth')
	// 	if (!track?.songLink) return
	// 	const peakCount = Math.floor(lineWidth / (PIXEL_PER_PEAK + GAP))

	// 	buildWaveform(cachedOrRemote(track.songLink), peakCount).then(setPeaks)
	// }, [track?.songLink, lineWidth])

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!track || !lineWidth) return

		e.currentTarget.setPointerCapture(e.pointerId)
		e.preventDefault()

		const seek = (e: PointerEvent) => {
			if (!lineRef.current) return
			const rect = lineRef.current.getBoundingClientRect()
			const p = Math.min(
				100,
				Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)
			)
			debouncedShift(p)
		}

		seek(e.nativeEvent)

		const onMove = (evt: PointerEvent) => seek(evt)
		const onUp = () => {
			window.removeEventListener('pointermove', onMove)
			window.removeEventListener('pointerup', onUp)
			debouncedShift.cancel()
		}

		window.addEventListener('pointermove', onMove)
		window.addEventListener('pointerup', onUp, { once: true })
	}

	return (
		<div
			ref={lineRef}
			className={`h-[3px] bg-neutral-400/40
				relative cursor-pointer group border-t-[10px] border-b-[10px] box-content border-black`}
			onPointerDown={track ? handlePointerDown : undefined}
		>
			{/* {peaks.length > 0 && (
				<WaveLine
					peaks={peaks}
					duration={duration}
					progress={progress}
					mode="full"
				/>
			)} */}

			<div className="absolute left-0 bottom-[-20px] text-[12px] text-neutral-400/40 select-none pointer-events-none">
				{formatDuration(timer)}
			</div>
			<div className="absolute right-0 bottom-[-20px] text-[12px] text-neutral-400/40 select-none pointer-events-none">
				{formatDuration(duration)}
			</div>
			<div
				style={{ width: `${completedWidth}px` }}
				className="h-full left-0 top-0 bg-neutral-400 relative"
			>
				<div
					className={`w-2 h-2 bg-neutral-400
						absolute translate-x-[-3px] top-[50%] translate-y-[-50%]
						aspect-square border rounded-xl border-neutral-600
						opacity-0 transition-opacity duration-100
						group-hover:opacity-100`}
					style={{ transform: `translateX(${completedWidth - 4}px)` }}
				></div>
			</div>
		</div>
	)
}
