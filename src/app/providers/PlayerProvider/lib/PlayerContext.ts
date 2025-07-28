import { createContext } from 'react';

export interface PlayerContextProps {
  setCurrentTrack?: (src: string) => void;
  currentTrack?: string;
  setProgress?: (progress: number) => void;
  playTrack?: () => void;
  pauseTrack?: () => void;
}
export const PlayerContext = createContext<PlayerContextProps>({});
