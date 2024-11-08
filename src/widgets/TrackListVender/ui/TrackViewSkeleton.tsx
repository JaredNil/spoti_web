import React, { DOMElement, useEffect, useRef } from 'react';
import { Track } from 'entities/Track';

import { FaHeart } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { debounceResize } from 'shared/lib/hooks/useDebounce/useDebounceHooks';
import { twMerge } from 'tailwind-merge';
import toastr from 'toastr';

interface TrackViewSkeletonProps {
	isCompact: boolean;
}

export const TrackViewSkeleton: React.FC<TrackViewSkeletonProps> = ({ isCompact }: TrackViewSkeletonProps) => {
	const arr = new Array(6).fill('').map((_, i) => String(i));

	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		toastr.success('Лайк не засчитан');
	};

	return (
		<div className="playlist__wrapper pb-[30px]">
			<div
				className={twMerge(
					`playlist__table mt-3 grid w-full flex-col items-center`,
					isCompact && 'playlist__compact',
					'h-6'
				)}
			>
				<div className="table-id pointer-events-none select-none text-center">#</div>
				<div className=" pointer-events-none select-none font-extralight">Название</div>
				<div className="table-image" />
				<div className="table-data pointer-events-none select-none">Data</div>
				<div className="table-timer flex justify-center ">
					<IoIosTimer />
				</div>
				<div className="flex h-full justify-center">
					<FaHeart fill="rgba(255, 0, 0, 1)" />
				</div>
			</div>
			{arr.map((track, i) => {
				return (
					<div
						key={track}
						className={twMerge(
							`playlist__table grid w-full flex-col items-center overflow-hidden
							rounded-xl transition hover:bg-neutral-400/5`,
							isCompact && 'playlist__compact'
						)}
					>
						<div className="table-id pointer-events-none select-none text-center">
							{i + 1}
						</div>
						<div className="table-image flex items-center justify-start">
							<div className="sceleton aspect-square h-[40px] w-auto rounded-lg" />
						</div>
						<div
							className="sceleton h-[24px] min-w-[100px] max-w-[30%] 
							select-none rounded-lg text-transparent "
						>
							Track name of playlist
						</div>
						<div
							className="table-data sceleton h-[24px] w-[60px] 
							select-none rounded-lg text-transparent"
						>
							01.01.2000
						</div>
						<div
							className="table-timer sceleton flex h-[24px] w-[60px] 
							select-none justify-center rounded-lg text-transparent"
						>
							timer
						</div>
						<div
							className="flex h-full items-center justify-center"
							onClick={onLikeTrack}
						>
							<FaHeart fill="rgba(255, 0, 0, 1)" />
						</div>
					</div>
				);
			})}
		</div>
	);
};
