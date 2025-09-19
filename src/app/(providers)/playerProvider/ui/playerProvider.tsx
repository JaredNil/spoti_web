'use client'
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'

import { cachedOrRemote } from '../lib/cachedOrRemote'
import { PlayerContext } from '../lib/playerContext'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ze } from '@/shared/lib/log'
import { getVolumePlayer, playerAction, usePlayer } from '@/widgets/player'

interface PlayerProvider {
	children: React.ReactNode
}

export const PlayerProvider: React.FC<PlayerProvider> = ({
	children,
}: PlayerProvider) => {
	const dispatch = useAppDispatch()

	const [currentTrack, setCurrentTrack] = useState<string>('')

	const audioRef = useRef<HTMLAudioElement>(null)

	const volume = useAppSelector(getVolumePlayer)
	useEffect(() => {
		if (audioRef.current) {
			if (volume <= 100 && volume >= 0)
				audioRef.current.volume = volume / 100
		}
	}, [volume])

	const audioTimeUpdateHandler = (event: ChangeEvent<HTMLAudioElement>) => {
		const { currentTime, duration } = event.target
		dispatch(playerAction.setTimer(currentTime))

		if (currentTime / duration <= 100) {
			dispatch(
				playerAction.setProgress(
					Number(((currentTime / duration) * 100).toFixed(2))
				)
			)
		}
	}
	const audioChangeDurationHandler = (
		event: ChangeEvent<HTMLAudioElement>
	) => {
		dispatch(playerAction.setDuration(event.target.duration))
	}

	const setProgress = (progress: number): void => {
		const tempDur = audioRef.current?.duration
		if (tempDur && audioRef.current)
			audioRef.current.currentTime = (progress * tempDur) / 100
	}

	const setVolume = (volume: number): void => {
		if (audioRef.current) audioRef.current.volume = volume
	}

	const playTrack = (): void => {
		audioRef.current?.play()
	}

	const pauseTrack = (): void => {
		audioRef.current?.pause()
	}

	const { next } = usePlayer()

	const endedHandler = (): void => next()

	const defaultProps = useMemo(
		() => ({
			currentTrack,
			setCurrentTrack,
			setProgress,
			setVolume,
			playTrack,
			pauseTrack,
		}),
		[currentTrack]
	)

	const path = useMemo(() => cachedOrRemote(currentTrack), [currentTrack])

	return (
		<PlayerContext.Provider value={defaultProps}>
			{currentTrack && (
				<audio
					src={path}
					ref={audioRef}
					onEnded={endedHandler}
					onTimeUpdate={audioTimeUpdateHandler}
					onDurationChange={audioChangeDurationHandler}
					autoPlay
					crossOrigin="anonymous"
				></audio>
			)}
			{children}
		</PlayerContext.Provider>
	)
}
