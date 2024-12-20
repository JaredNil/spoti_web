import { useMemo, useState } from 'react';
import { PlayerContext } from '../lib/PlayerContext';

interface PlayerProviderI {
	children: React.ReactNode;
}

const PlayerProvider: React.FC<PlayerProviderI> = ({ children }: PlayerProviderI) => {

	const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement| null>(null);

	const defaultProps = useMemo(
		() => ({
			currentTrack,
			setCurrentTrack,
		}),
		[currentTrack]
	);

	return <PlayerContext.Provider value={defaultProps}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;
