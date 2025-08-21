import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { VolumeIcon } from './volumeIcon'
import { getVolumePlayer } from '../model/selector/playerSelector'
import { playerAction } from '../model/slice/playerSlice'

const PLAYER_VOLUME_WIDTH = 60 // px

export const Volume: React.FC = () => {
	const volume = useSelector(getVolumePlayer)

	const dispatch = useAppDispatch()

	const volumeRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// dispatch(fetchPlayerData) IN DEMO - NOT WORKING WITH SERVER
	}, [])

	useEffect(() => {
		setVolumeWidth(Math.floor((volume / 100) * PLAYER_VOLUME_WIDTH))
	}, [volume])

	const [volumeWidth, setVolumeWidth] = useState<number>(
		(volume / 100) * (volumeRef.current?.offsetWidth || PLAYER_VOLUME_WIDTH)
	)
	const [isResize, setIsResize] = useState(false) // resizeVolume

	const getVolumeWidth = () => `${volumeWidth}px`

	const volumeClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
		setIsResize(false)

		let newVolume = Math.floor(
			(event.pageX - Number(volumeRef.current?.offsetLeft)) /
				(PLAYER_VOLUME_WIDTH / 100)
		)

		if (newVolume > 100) newVolume = 100
		else if (newVolume < 0) newVolume = 0
		dispatch(playerAction.setVolume(newVolume))
	}

	const volumeMouseDownHandle = () => setIsResize(true)
	const volumeMouseLeaveHandle = () => setIsResize(false)
	const volumeMouseUpHandle = () => setIsResize(false)

	const volumeMouseMoveHandle = (event: React.MouseEvent<HTMLDivElement>) => {
		if (
			isResize &&
			event.pageX - Number(volumeRef.current?.offsetLeft) <=
				PLAYER_VOLUME_WIDTH &&
			event.pageX - Number(volumeRef.current?.offsetLeft) >= 0
		)
			dispatch(
				playerAction.setVolume(
					Math.floor(
						(event.pageX - Number(volumeRef.current?.offsetLeft)) /
							(PLAYER_VOLUME_WIDTH / 100)
					)
				)
			)
	}

	return (
		<div className="flex justify-end items-center mr-4">
			<VolumeIcon />
			<div
				ref={volumeRef}
				className={`ml-2 w-[${PLAYER_VOLUME_WIDTH}px] h-[3px] bg-neutral-400/40 
				relative cursor-pointer group border-t-[10px] border-b-[10px] box-content border-black`}
				onClick={volumeClickHandle}
				onMouseDown={volumeMouseDownHandle}
				onMouseLeave={volumeMouseLeaveHandle}
				onMouseUp={volumeMouseUpHandle}
				onMouseMove={volumeMouseMoveHandle}
			>
				<div
					style={{ width: getVolumeWidth() }}
					className="h-full left-0 top-0 bg-neutral-400 relative"
				>
					<div
						className="w-2 h-2 bg-neutral-400
						absolute translate-x-[-3px] top-[50%] translate-y-[-50%]
						aspect-square border rounded-xl border-neutral-600
						opacity-0 transition-opacity duration-100
						group-hover:opacity-100
					"
						style={{ left: getVolumeWidth() }}
					></div>
				</div>
			</div>
		</div>
	)
}
