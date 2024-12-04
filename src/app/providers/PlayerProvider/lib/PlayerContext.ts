import { createContext } from 'react';

export interface PlayerContextProps {
	setCurrentTrack?: (track: string) => void;
	currentTrack?: HTMLAudioElement| null;
}

export const PlayerContext = createContext<PlayerContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
