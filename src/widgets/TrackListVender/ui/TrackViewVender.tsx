import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlay } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiListBulletsThin, PiListLight } from 'react-icons/pi';

import { twMerge } from 'tailwind-merge';

import { getIsLoadingData } from 'pages/PlaylistPage/model/selector/playListPageSelector';
import { TrackViewListing } from './TrackViewListing';
import { TrackViewSkeleton } from './TrackViewSkeleton';

interface TrackListProps {
	className?: string;
	onShowModal: (id: number) => void;
}

export const TrackViewVender: React.FC<TrackListProps> = (props: TrackListProps) => {
	const { className, onShowModal } = props;

	const isLoadingData = useSelector(getIsLoadingData);

	const [isCompact, setIsList] = useState<boolean>(false);
	const toggleList = () => setIsList(!isCompact);

	return (
		<div className={twMerge('my-4 flex w-full flex-col bg-[#121212] px-6 py-4', 'tracklist__mainWrapper')}>
			<div className="flex justify-between">
				<div className="flex">
					<div
						className="flex h-[56px] w-[56px] items-center justify-center 
                        rounded-full bg-green-500 drop-shadow-md
                        transition hover:scale-110 group-hover:opacity-100
                    "
					>
						<FaPlay className="text-black" />
					</div>
					<div
						className="flex h-[56px] w-[56px] items-center justify-center 
                        rounded-full drop-shadow-md
                        transition hover:scale-110 group-hover:opacity-100
                    "
					>
						<HiOutlineDotsHorizontal size={32} className="text-neutral-400" />
					</div>
				</div>

				<div className="flex cursor-pointer" onClick={toggleList}>
					{!isCompact ? (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">Cписок</span>
							<PiListBulletsThin size={22} fill="rgba(163, 163, 163, 1)" />
						</div>
					) : (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">
								Компактный
							</span>
							<PiListLight size={22} fill="rgba(163, 163, 163, 1)" />
						</div>
					)}
				</div>
			</div>

			{isLoadingData ? (
				<TrackViewSkeleton isCompact={isCompact} />
			) : (
				<TrackViewListing isCompact={isCompact} onShowModal={onShowModal} />
			)}
		</div>
	);
};
