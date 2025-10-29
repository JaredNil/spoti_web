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
	// new - preload track in cache browser
	const [nextPreloadTrack, setNextTrack] = useState<string>('')
	const { next, prev } = usePlayer()

	const audioRef = useRef<HTMLAudioElement>(null)

	const volume = useAppSelector(getVolumePlayer)

	// Изменение громкости -
	useEffect(() => {
		if (audioRef.current) {
			if (volume <= 100 && volume >= 0)
				audioRef.current.volume = volume / 100
		}
	}, [volume, currentTrack])

	// Auto switcher tracks в фоне работы приложения(чтобы не блокировать audio API)
	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return

		const checkEnded = () => {
			if (audio.currentTime >= audio.duration - 0.5) {
				next()
			}
		}

		const interval = setInterval(checkEnded, 1000)
		return () => clearInterval(interval)
	}, [currentTrack, next])

	useEffect(() => {
		if (!('mediaSession' in navigator)) return

		navigator.mediaSession.setActionHandler('nexttrack', () => next())
		navigator.mediaSession.setActionHandler('previoustrack', () => prev())
	}, [next, prev])

	// HANDLERS
	// HANDLERS
	// HANDLERS
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

	// deprecated
	// const audioChangeDurationHandler = (
	// 	event: ChangeEvent<HTMLAudioElement>
	// ) => {
	// 	dispatch(playerAction.setDuration(event.target.duration))
	// }

	const audioLoadedMetadataHandler = () => {
		const audio = audioRef.current
		if (!audio) return
		dispatch(playerAction.setDuration(audio.duration))
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

	// Оставил для надежности, но он не должен срабатывать -
	// useEffect должен перехватывать окончание трека и переключать на следующий до его конца
	// Чтобы не блокировать в фоновом режиме мобильного браузера
	// Потом закэшировать в воркере
	const endedHandler = (): void => next()

	const defaultProps = useMemo(
		() => ({
			currentTrack,
			setCurrentTrack,
			setNextTrack,
			setProgress,
			setVolume,
			playTrack,
			pauseTrack,
		}),
		[currentTrack]
	)

	const path = useMemo(() => cachedOrRemote(currentTrack), [currentTrack])
	const pathPreload = useMemo(
		() => cachedOrRemote(nextPreloadTrack),
		[nextPreloadTrack]
	)

	return (
		<PlayerContext.Provider value={defaultProps}>
			{currentTrack && (
				<audio
					key={currentTrack}
					src={path}
					ref={audioRef}
					onEnded={endedHandler}
					onTimeUpdate={audioTimeUpdateHandler}
					// onDurationChange={audioChangeDurationHandler}
					onLoadedMetadata={audioLoadedMetadataHandler}
					preload="auto"
					autoPlay
					playsInline
					crossOrigin="anonymous"
				></audio>
			)}
			{nextPreloadTrack && (
				<audio
					src={pathPreload}
					preload="auto"
					playsInline
					crossOrigin="anonymous"
				></audio>
			)}
			{children}
		</PlayerContext.Provider>
	)
}
