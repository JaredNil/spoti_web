'use client'

import { useEffect, useState } from 'react'
import { IoIosVolumeHigh } from 'react-icons/io'
import { IoIosVolumeLow } from 'react-icons/io'
import { IoIosVolumeMute } from 'react-icons/io'

import { getVolumePlayer } from '../../model/selector/playerSelector'
import { playerAction } from '../../model/slice/playerSlice'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Icons } from '@/shared/icons'

export const VolumeIcon: React.FC = () => {
	const volume = useAppSelector(getVolumePlayer)

	const dispatch = useAppDispatch()

	const [isHigh, setIsHigh] = useState(false)
	const [isLow, setIsLow] = useState(false)
	const [isMute, setIsMute] = useState(false)

	const [muteVolumeStack, setMuteVolumeStack] = useState(volume || 100)

	useEffect(() => {
		setIsHigh(false)
		setIsLow(false)
		setIsMute(false)

		if (80 < volume && volume <= 100) setIsHigh(true)
		else if (15 < volume && volume <= 80) setIsLow(true)
		else if (volume >= 0 && volume <= 15) setIsMute(true)
		else console.error('not correct volume value')
	}, [volume])

	const muteClickHandle = () => {
		if (volume == 0) dispatch(playerAction.setVolume(muteVolumeStack))
		else {
			setMuteVolumeStack(volume)
			dispatch(playerAction.setVolume(0))
		}
	}

	return (
		<div
			className="flex justify-center items-center cursor-pointer"
			onClick={muteClickHandle}
		>
			{isHigh && <Icons name="HighVolume" />}
			{isLow && <Icons name="LowVolume" />}
			{isMute && <Icons name="MuteVolume" />}
		</div>
	)
}
