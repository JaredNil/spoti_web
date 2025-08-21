'use client'

import { useMemo } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

import { useAppSelector } from '@/shared/hooks'
import { usePlayer } from '@/widgets/player'
import { getPlayerNativeQueue } from '@/widgets/player'

// RELAY(TED) TRACKES ID - В КОМПОНЕНТ ЗАМЫКАЕТСЯ ПЕРЕДАННЫЙ К ЭТОЙ КНОПКЕ МАССИВ ID ТРЕКОВ,
// В БУДУЩЕМ ДОБАВИТЬ ВОЗМОЖНОСТЬ РАБОТЫ ПО АЙДИ ПЛЕЙЛИСТА
interface PlayButtonProps {
	type?: 'album' | 'trackes'
	relayTrackesId: number[]
	classname?: string
}

export const PlayButton: React.FC<PlayButtonProps> = ({
	type = 'trackes',
	relayTrackesId,
	classname,
}: PlayButtonProps) => {
	const { start, isRun, pause, play } = usePlayer()

	const currentQueve = useAppSelector(getPlayerNativeQueue)

	if (type === 'album') {
		// REFACTOR WRITE DISPATCH REACT QUERY ACTION
		// const album = await fetchAlbum(relayTrackesId[0])
		// const trackesId = album.trackes_id
	}

	const isActivePlayerAlbum = relayTrackesId === currentQueve

	const activeIcon = useMemo(
		() =>
			isActivePlayerAlbum && isRun ? (
				<FaPause className="text-black" />
			) : (
				<FaPlay className="text-black" />
			),
		[isActivePlayerAlbum, isRun]
	)

	const playHandler = async () => {
		if (isRun && isActivePlayerAlbum) pause()
		else if (isRun && !isActivePlayerAlbum) start(relayTrackesId)
		else if (!isRun && isActivePlayerAlbum) play()
		else if (!isRun) start(relayTrackesId)
	}

	return (
		<div
			onClick={playHandler}
			className={`flex h-full w-full aspect-square items-center justify-center 
			rounded-full bg-green-500 drop-shadow-md
			transition hover:scale-110 group-hover:opacity-100 pointer-events-auto 
			${classname}`}
		>
			{activeIcon}
		</div>
	)
}
