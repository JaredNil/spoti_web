import { useContext } from 'react';

import { Track } from 'entities/Track';

import { PlayerContext } from './PlayerContext';

interface CurrentTrackHook {
	toggleTrack: (newTrack: Track | null) => void;
	currentTrack: HTMLAudioElement| null;
}

export function useCurrentTrack(): CurrentTrackHook {
	const { currentTrack, setCurrentTrack } = useContext(PlayerContext);

	const toggleTrack = (newTrack: Track| null): void => {
		if (setCurrentTrack) {
            if (newTrack === null) setCurrentTrack(null)
            else {
				const temp = new Audio(newTrack.songLink)
				temp.addEventListener('loadeddata', ()=>{
					console.log('load audio')
					temp.play()
				})
				setCurrentTrack(temp)
			}
        }
	}

	return {
		currentTrack: currentTrack || null,
		toggleTrack,
	};
}

