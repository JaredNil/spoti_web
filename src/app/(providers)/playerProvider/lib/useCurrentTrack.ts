import { useContext } from 'react'

import { PlayerContext } from './playerContext'

import { ze } from '@/shared/lib/log'

interface CurrentTrackHook {
	toggleTrack: (newTrack: string, nextrack?: string) => void
	currentTrack?: string
	shift: (progress: number) => void
	setVolume?: (volume: number) => void
	playTrack?: () => void
	pauseTrack?: () => void
}

export function useCurrentTrack(): CurrentTrackHook {
	const {
		currentTrack,
		setCurrentTrack,
		// setNextTrack, - deprecated -> refactor
		setProgress,
		playTrack,
		pauseTrack,
	} = useContext(PlayerContext)

	const toggleTrack = (newTrack: string): void => {
		if (setCurrentTrack) {
			// handle current track
			if (newTrack === '') setCurrentTrack('')
			else if (newTrack !== null) {
				setCurrentTrack(newTrack)
			}
			// DEPRECATED
			// handle next track preload
			// if (nextTrack !== '' && nextTrack != undefined) {
			// 	setNextTrack(nextTrack)
			// }
		} else ze('Ошибка инициализации музыки.')
	}

	const shift = (progress: number): void => {
		if (setProgress) setProgress(progress)
	}

	return {
		currentTrack: currentTrack,
		toggleTrack,
		shift: shift,
		playTrack: playTrack,
		pauseTrack: pauseTrack,
	}
}
