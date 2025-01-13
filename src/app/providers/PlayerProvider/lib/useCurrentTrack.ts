import { useContext } from 'react';

import { PlayerContext } from './PlayerContext';

interface CurrentTrackHook {
	toggleTrack: (newTrack: string) => void;
	currentTrack?: string;
	shift: (progress: number) => void;
	setVolume?:  (volume: number) => void;
	playTrack?: () => void;
	pauseTrack?: () => void;
}

export function useCurrentTrack(): CurrentTrackHook {
	const { currentTrack, setCurrentTrack, setProgress, playTrack, pauseTrack } = useContext(PlayerContext);

	// DEPRECATED toggleTrack THROUGH TRACK INTERFACE
	// const toggleTrack = (newTrack: Track): void => {

	// 	if (setCurrentTrack && newTrack === null) setCurrentTrack(null)
    //     else if (setCurrentTrack && newTrack !== null) {
	//			const audio = new Audio(newTrack.songLink)
	// 			audio.play()
	//			audio.addEventListener('loadeddata', () => {
	//			console.log('load track')
				// audio.play()
	//		})
	// 		setCurrentTrack(newTrack)
	// 	 }
	// }

	const toggleTrack = (newTrack: string): void => {

		if (setCurrentTrack && newTrack === '') setCurrentTrack('')
        else if (setCurrentTrack && newTrack !== null) {
			setCurrentTrack('')
			setCurrentTrack(newTrack)
		}
		else new Error('Ошибка инициализации музыки.')
	}

	const shift = (progress: number): void => {if (setProgress) setProgress(progress) }

	return {
		currentTrack: currentTrack,
		toggleTrack,
		shift: shift,
		playTrack: playTrack,
		pauseTrack: pauseTrack
	};
}

