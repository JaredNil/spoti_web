import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { PlayerContext } from '../lib/PlayerContext';
import { useSelector } from 'react-redux';
import { getPlayerLineData } from 'widgets/Player/model/selector/PlayerSelector';
import { playerAction } from 'widgets/Player/model/slice/PlayerSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface PlayerProviderI {
	children: React.ReactNode;
}

const PlayerProvider: React.FC<PlayerProviderI> = ({ children }: PlayerProviderI) => {

	const dispatch = useAppDispatch()	

	// const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement| null>(null); // DEPRECATED. NOW THROUTH STRING
	const [currentTrack, setCurrentTrack] = useState<string>('');

	const audioRef = useRef<HTMLAudioElement>(null)

	const {duration, progress, timer} = useSelector(getPlayerLineData)

	// const [timer, setTimer] = useState(audioRef?.current?.currentTime)
	// const [duration, setDuration] = useState(audioRef?.current?.duration)
	// const [progress, setProgress] = useState(0)


	const audioTimeUpdateHandler = (event: ChangeEvent<HTMLAudioElement>) => {
		dispatch(playerAction.setTimer(event.target.currentTime))

		if (event.target.currentTime/event.target.duration <= 100){
			dispatch(playerAction.setProgress(Number((event.target.currentTime/event.target.duration*100).toFixed(2))))
		}
	}
	const audioChangeDurationHandler = (event: ChangeEvent<HTMLAudioElement>) => {
		dispatch(playerAction.setDuration(event.target.duration))
	}

	const defaultProps = useMemo(
		() => ({
			currentTrack,
			setCurrentTrack
		}),
		[currentTrack]
	);

	return (
		<PlayerContext.Provider value={defaultProps}>
			{(currentTrack)? <audio ref={audioRef} src={currentTrack} onTimeUpdate={audioTimeUpdateHandler} onDurationChange={audioChangeDurationHandler} autoPlay></audio> : ''}
			{children}
		</PlayerContext.Provider>
	);
};

export default PlayerProvider;
