'use client'

import { useEffect } from 'react'

import { PlayerPlay } from './piece/playerPlay'
import { PlayerDescription } from './playerDescription'
import { PlayerLine } from './playerLine'
import { Volume } from './volume'
import { useKeyActivator } from '../model/hook/useKeyActivator'
import {
	getIsRunPlayer,
	getNextTrack,
	getTrack,
} from '../model/selector/playerSelector'

import { useCurrentTrack } from '@/app/(providers)/playerProvider'
import { useAppSelector } from '@/shared/hooks'

export const PLAYER_VOLUME_WIDTH = 60 // px

export const Player: React.FC = () => {
	useKeyActivator()

	const isRun = useAppSelector(getIsRunPlayer)

	const track = useAppSelector(getTrack)
	const nextTrack = useAppSelector(getNextTrack)
	const { toggleTrack, pauseTrack } = useCurrentTrack()

	useEffect(() => {
		if (track)
			toggleTrack(
				track?.songLink as string,
				(nextTrack?.songLink as string) ?? ''
			)
	}, [track, toggleTrack, nextTrack])

	useEffect(() => {
		if (!isRun && pauseTrack) pauseTrack()
	}, [isRun, pauseTrack])

	return (
		<div
			className="relative z-50 min-h-20 w-full px-2
			flex flex-col
			bg-black sm:px-4"
		>
			{/* mobile layout player line */}
			<div className="sm:hidden h-14 px-5">
				<PlayerLine />
			</div>
			{/* desktop layout player line */}
			<div className="flex justify-between items-center h-full">
				<PlayerDescription
					classname="w-[315px]"
					track={track ?? null}
				/>
				<PlayerPlay />
				<div className="flex-1 pr-3 hidden sm:block">
					<PlayerLine />
				</div>
				<Volume classname="mr-4" />
			</div>
		</div>
	)
}
