'use client'

import { useRef } from 'react'

import { VolumeIcon } from './piece/volumeIcon'
import { VolumeLine } from './piece/volumeLine'
import { PLAYER_VOLUME_WIDTH } from './player'
import { useDragVolume } from '../model/hook/useDragVolume'
import { pxToVolume } from '../model/lib/pxToVolume'
import { getVolumePlayer } from '../model/selector/playerSelector'
import { playerAction } from '../model/slice/playerSlice'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'

export const Volume: React.FC<{ classname: string }> = ({ classname }) => {
	const volumeRef = useRef<HTMLDivElement>(null)
	const volume = useAppSelector(getVolumePlayer)
	const dispatch = useAppDispatch()

	const { onMouseDown } = useDragVolume(volumeRef, (v) =>
		dispatch(playerAction.setVolume(v))
	)

	const volumeWidth = Math.round((volume / 100) * PLAYER_VOLUME_WIDTH)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!volumeRef.current) return
		const px = e.clientX - volumeRef.current.getBoundingClientRect().left
		dispatch(playerAction.setVolume(pxToVolume(px)))
	}

	return (
		<div className={`flex justify-end items-center ${classname} `}>
			<VolumeIcon />
			<VolumeLine
				ref={volumeRef}
				volumeWidth={volumeWidth}
				handleClick={handleClick}
				onMouseDown={onMouseDown}
			/>
		</div>
	)
}
