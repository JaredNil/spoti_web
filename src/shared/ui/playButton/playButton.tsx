'use client'

import { useMemo } from 'react'

import { Track, TrackesId } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { Icons } from '@/shared/icons'
import { getTrack, usePlayer } from '@/widgets/player'
import { getPlayerNativeQueue } from '@/widgets/player'

// RELAY(TED) TRACKES ID - В КОМПОНЕНТ ЗАМЫКАЕТСЯ ПЕРЕДАННЫЙ К ЭТОЙ КНОПКЕ МАССИВ ID ТРЕКОВ,
// В БУДУЩЕМ ДОБАВИТЬ ВОЗМОЖНОСТЬ РАБОТЫ ПО АЙДИ ПЛЕЙЛИСТА
interface PlayButtonProps {
	type?: 'album' | 'track'
	relayTrackesId: TrackesId
	track?: Track
	target?: number
	classname?: string
}

const pauseIcon = <Icons name="Pause" size={22} />
const playIcon = <Icons name="Play" size={18} classname=" left-[1px]" />

export const PlayButton: React.FC<PlayButtonProps> = ({
	type = 'track',
	relayTrackesId,
	track,
	target = 0,
	classname,
}: PlayButtonProps) => {
	const { start, isRun, pause, play } = usePlayer()

	const playerTrack = useAppSelector(getTrack)
	const currentQueve = useAppSelector(getPlayerNativeQueue)

	const isActivePlayerAlbum = relayTrackesId === currentQueve

	const activeIcon = useMemo(() => {
		if (type == 'album') {
			if (isRun && isActivePlayerAlbum) return pauseIcon
			else return playIcon
		} else if (type == 'track') {
			if (isRun && track?.id == playerTrack?.id) return pauseIcon
			else return playIcon
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
			[&_svg]:fill-black
			${classname} 
			${
				isRun &&
				track?.id == playerTrack?.id &&
				type == 'track' &&
				'bg-transparent [&_svg]:fill-green-500'
			}`}
		>
			{activeIcon}
		</div>
	)
}
