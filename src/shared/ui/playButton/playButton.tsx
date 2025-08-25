'use client'

import { useMemo } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

import { Track } from '@/shared/api/track'
import { useAppSelector } from '@/shared/hooks'
import {
	getPlayerQueue,
	getPlayerTarget,
	getTrack,
	usePlayer,
} from '@/widgets/player'
import { getPlayerNativeQueue } from '@/widgets/player'

// RELAY(TED) TRACKES ID - В КОМПОНЕНТ ЗАМЫКАЕТСЯ ПЕРЕДАННЫЙ К ЭТОЙ КНОПКЕ МАССИВ ID ТРЕКОВ,
// В БУДУЩЕМ ДОБАВИТЬ ВОЗМОЖНОСТЬ РАБОТЫ ПО АЙДИ ПЛЕЙЛИСТА
interface PlayButtonProps {
	type?: 'album' | 'track'
	relayTrackesId: number[]
	track?: Track
	target?: number
	classname?: string
}

const pauseIcon = <FaPause className="text-black" />
const playIcon = <FaPlay className="text-black" />

export const PlayButton: React.FC<PlayButtonProps> = ({
	type = 'track',
	relayTrackesId,
	track,
	target = 0,
	classname,
}: PlayButtonProps) => {
	const queue = useAppSelector(getPlayerQueue)
	const playerTarget = useAppSelector(getPlayerTarget)
	console.log()

	console.log(relayTrackesId, target, queue, playerTarget)
	const { start, isRun, pause, play } = usePlayer()
	const playerTrack = useAppSelector(getTrack)

	const currentQueve = useAppSelector(getPlayerNativeQueue)

	const isActivePlayerAlbum = relayTrackesId === currentQueve

	const activeIcon = useMemo(() => {
		if (type == 'album') {
			if (isRun && isActivePlayerAlbum) {
				return pauseIcon
			} else if (isRun && !isActivePlayerAlbum) {
				return playIcon
			} else if (!isRun && !isActivePlayerAlbum) {
				return playIcon
			} else if (!isRun && isActivePlayerAlbum) {
				return playIcon
			}
		} else if (type == 'track') {
			if (isRun && track?.id == playerTrack?.id) {
				return pauseIcon
			} else if (!isRun && track?.id == playerTrack?.id) {
				return playIcon
			} else if (!isRun && track?.id != playerTrack?.id) {
				return playIcon
			} else if (isRun && track?.id != playerTrack?.id) {
				return playIcon
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRun, playerTrack?.id])

	const playHandler = () => {
		if (type == 'album') {
			if (isRun && isActivePlayerAlbum) pause()
			else if (isRun && !isActivePlayerAlbum)
				start(relayTrackesId, target)
			else if (!isRun && isActivePlayerAlbum) play()
			else if (!isRun && !isActivePlayerAlbum)
				start(relayTrackesId, target)
		} else {
			if (isRun && track?.id == playerTrack?.id) pause()
			else if (isRun && track?.id != playerTrack?.id)
				start(relayTrackesId, target)
			else if (!isRun && track?.id == playerTrack?.id) play()
			else if (!isRun && track?.id != playerTrack?.id)
				start(relayTrackesId, target)
		}
	}

	return (
		<div
			onClick={playHandler}
			className={`flex h-full w-full aspect-square items-center justify-center 
			rounded-full bg-green-500 drop-shadow-md
			transition hover:scale-110 group-hover:opacity-100 pointer-events-auto 
			${classname} 
			${
				isRun &&
				track?.id == playerTrack?.id &&
				type == 'track' &&
				'bg-transparent *:fill-green-500'
			}`}
		>
			{activeIcon}
		</div>
	)
}
