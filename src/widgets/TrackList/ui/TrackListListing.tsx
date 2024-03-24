import React, { DOMElement, useEffect, useRef } from 'react';
import { Track } from 'entities/Track';

import { FaHeart } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { debounceResize } from 'shared/lib/hooks/useDebounce/useDebounceHooks';
import { twMerge } from 'tailwind-merge';

interface TrackListListingProps {
	tracks?: Track[];
	isCompact: boolean;
}

export const TrackListListing: React.FC<TrackListListingProps> = ({ tracks, isCompact }: TrackListListingProps) => {
	let gridTableSetting = '44px 56px 3fr 2fr 60px 80px';

	const arr = new Array(30).fill('');

	return (
		<div className="playlist__wrapper pb-[30px]">
			<div className={twMerge(`playlist__table mt-3 grid w-full flex-col`, isCompact && 'playlist__compact')}>
				<div className="table-id pointer-events-none select-none text-center">#</div>
				<div className=" pointer-events-none select-none font-extralight">Название</div>
				<div className="table-image" />
				<div className="table-data pointer-events-none select-none">Data</div>
				<div className="table-timer flex justify-center ">
					<IoIosTimer />
				</div>
				<div className="flex justify-center ">
					<FaHeart fill="rgba(255, 0, 0, 1)" />
				</div>
			</div>
			{arr.map((track, i) => {
				return (
					<div
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
							<img
								className="h-[40px]"
								src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
								alt="/"
							/>
						</div>
						<div>Name</div>
						<div className="table-data">01.01.2000</div>
						<div className="table-timer flex justify-center ">2:00</div>
						<div className="flex justify-center ">
							<FaHeart fill="rgba(255, 0, 0, 1)" />
						</div>
					</div>
				);
			})}
		</div>
	);
};
