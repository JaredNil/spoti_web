import { useEffect, useState } from 'react'
import { IoIosVolumeHigh } from 'react-icons/io'
import { IoIosVolumeLow } from 'react-icons/io'
import { IoIosVolumeMute } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getVolumePlayer } from '../model/selector/playerSelector'
import { playerAction } from '../model/slice/playerSlice'

export const VolumeIcon: React.FC = () => {
	const volume = useSelector(getVolumePlayer)

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
			{isHigh && <IoIosVolumeHigh />}
			{isLow && <IoIosVolumeLow />}
			{isMute && <IoIosVolumeMute />}
		</div>
	)
}
