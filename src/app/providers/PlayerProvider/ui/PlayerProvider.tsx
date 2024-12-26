import { useMemo, useState } from 'react';
import { PlayerContext } from '../lib/PlayerContext';

interface PlayerProviderI {
	children: React.ReactNode;
}

const PlayerProvider: React.FC<PlayerProviderI> = ({ children }: PlayerProviderI) => {

	// const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement| null>(null);
	const [currentTrack, setCurrentTrack] = useState<string>('');


	const defaultProps = useMemo(
		() => ({
			currentTrack,
			setCurrentTrack,
		}),
		[currentTrack]
	);

	return (
		<PlayerContext.Provider value={defaultProps}>
			{(currentTrack)? <audio src={currentTrack} autoPlay></audio> : ''}
			{children}
		</PlayerContext.Provider>
	);
};

export default PlayerProvider;
