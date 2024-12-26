import { createContext } from 'react';

export interface PlayerContextProps {
	// setCurrentTrack?: (src: HTMLAudioElement | null) => void
	// currentTrack?: HTMLAudioElement| null;
	setCurrentTrack?: (src: string) => void
	currentTrack?: string;
}

export const PlayerContext = createContext<PlayerContextProps>({});