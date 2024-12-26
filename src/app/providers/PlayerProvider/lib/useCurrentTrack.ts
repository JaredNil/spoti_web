import { useContext } from 'react';

import { Track } from 'entities/Track';

import { PlayerContext } from './PlayerContext';

interface CurrentTrackHook {
	toggleTrack: (newTrack: string) => void;
	currentTrack?: string;
}

export function useCurrentTrack(): CurrentTrackHook {
	const { currentTrack, setCurrentTrack } = useContext(PlayerContext);

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
		console.log('toggleTrack')

		if (setCurrentTrack && newTrack === '') setCurrentTrack('')
        else if (setCurrentTrack && newTrack !== null) {
			setCurrentTrack('')
			setCurrentTrack(newTrack)
		}
		else new Error('Ошибка инициализации музыки.')
	}

	const clearTrack = (): void => {
		if (setCurrentTrack && currentTrack) {
			// currentTrack.pause()
			// currentTrack.removeEventListener('loadeddata', loadedDataHandler)
		}
	}


	return {
		currentTrack: currentTrack,
		toggleTrack,
	};
}

