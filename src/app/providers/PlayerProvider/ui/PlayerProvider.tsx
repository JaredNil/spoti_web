// import { type ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// // import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// // import { usePlayer } from 'widgets/Player';
// // import { getVolumePlayer } from 'widgets/Player/model/selector/PlayerSelector';
// // import { playerAction } from 'widgets/Player/model/slice/PlayerSlice';

// import { PlayerContext } from '../lib/PlayerContext';

// interface PlayerProviderI {
//   children: React.ReactNode;
// }

// export const PlayerProvider: React.FC<PlayerProviderI> = ({
//   children,
// }: PlayerProviderI) => {
// //   const dispatch = useAppDispatch();

//   // const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement| null>(null); // DEPRECATED. NOW THROUTH STRING
//   const [currentTrack, setCurrentTrack] = useState<string>('');

//   const audioRef = useRef<HTMLAudioElement>(null);

//   // volume handle. in next refactor rewrite as reactive func
// //   const volume = useSelector(getVolumePlayer);
//   useEffect(() => {
//     if (audioRef.current) {
//       console.log('volume is changed');
//       if (volume <= 100 && volume >= 0) audioRef.current.volume = volume / 100;
//     }
//   }, [volume]);

//   const audioTimeUpdateHandler = (event: ChangeEvent<HTMLAudioElement>) => {
//     dispatch(playerAction.setTimer(event.target.currentTime));

//     if (event.target.currentTime / event.target.duration <= 100) {
//       dispatch(
//         playerAction.setProgress(
//           Number(
//             ((event.target.currentTime / event.target.duration) * 100).toFixed(
//               2
//             )
//           )
//         )
//       );
//     }
//   };
//   const audioChangeDurationHandler = (event: ChangeEvent<HTMLAudioElement>) => {
//     dispatch(playerAction.setDuration(event.target.duration));
//   };

//   const setProgress = (progress: number): void => {
//     const tempDur = audioRef.current?.duration;
//     if (tempDur && audioRef.current)
//       audioRef.current.currentTime = (progress * tempDur) / 100;
//   };

//   const setVolume = (volume: number): void => {
//     if (audioRef.current) audioRef.current.volume = volume;
//   };

//   const playTrack = (): void => {
//     audioRef.current?.play();
//   };

//   const pauseTrack = (): void => {
//     audioRef.current?.pause();
//   };

//   const { next } = usePlayer();
//   const endedHandler = (): void => next();

//   const defaultProps = useMemo(
//     () => ({
//       currentTrack,
//       setCurrentTrack,
//       setProgress,
//       setVolume,
//       playTrack,
//       pauseTrack,
//     }),
//     [currentTrack]
//   );

//   return (
//     <PlayerContext.Provider value={defaultProps}>
//       {currentTrack ? (
//         <audio
//           onEnded={endedHandler}
//           ref={audioRef}
//           src={currentTrack}
//           onTimeUpdate={audioTimeUpdateHandler}
//           onDurationChange={audioChangeDurationHandler}
//           autoPlay
//         ></audio>
//       ) : (
//         ''
//       )}
//       {children}
//     </PlayerContext.Provider>
//   );
// };
