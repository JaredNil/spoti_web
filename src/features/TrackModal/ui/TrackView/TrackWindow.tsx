import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { curTrackReducer } from 'features/TrackModal/model/slice/curTrackSlice';
import { FaPlay } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

export interface TrackWindowProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducerList = {
	curTrack: curTrackReducer,
};

const TrackWindow: React.FC<TrackWindowProps> = memo((props: TrackWindowProps) => {
	const track = {
		title: 'Track',
		author: 'by JaredN',
	};

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div
				className="group relative flex cursor-pointer flex-col 
				items-center justify-center gap-x-4 overflow-hidden 
				rounded-md  bg-neutral-400/5 px-3 py-2 transition-all
				hover:bg-neutral-400/10"
			>
				<div
					className=" relative aspect-square 
					h-full w-full 
					overflow-hidden rounded-md"
				>
					<img
						className="pointer-events-none h-full w-full select-none"
						src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
						alt="/"
					/>
				</div>
				<div className="flex w-full flex-col items-start gap-y-1 pt-2">
					<p className="w-full truncate font-semibold">{track.title}</p>
					<p className="w-full truncate pb-4 text-sm  text-neutral-400">By {track.author}</p>
				</div>
				<div className="mb-2  flex">
					<div
						className="flex items-center justify-center rounded-full 
				bg-green-500 p-4  drop-shadow-md 
				transition hover:scale-110 
				"
					>
						<FaAnglesRight
							className="text-black"
							style={{ transform: 'rotate(180deg)' }}
						/>
					</div>
					<div
						className="mx-2 flex items-center 
				justify-center rounded-full bg-green-500 p-4
				drop-shadow-md transition hover:scale-110
				"
					>
						<FaPlay className="text-black" />
					</div>
					<div
						className="flex items-center justify-center rounded-full 
					bg-green-500 p-4 drop-shadow-md 
						transition hover:scale-110
				"
					>
						<FaAnglesRight className="text-black" />
					</div>
				</div>
			</div>
		</DynamicModuleLoader>
	);
});

export default TrackWindow;
