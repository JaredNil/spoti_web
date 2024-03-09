import { classNames } from 'shared/lib/classNames/classNames';
import { FaHeart, FaPlay } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiListBulletsThin, PiListLight } from 'react-icons/pi';
import { IoIosTimer } from 'react-icons/io';

import { useCallback, useState } from 'react';

interface TrackListProps {
	className?: string;
	id: string;
}

export const TrackList: React.FC<TrackListProps> = (props: TrackListProps) => {
	const { className, id } = props;

	const [isList, setIsList] = useState<boolean>(true);
	const toggleList = () => setIsList(!isList);

	let gridTableSetting = '44px 56px 3fr 2fr 60px 80px';

	const arr = new Array(30).fill('');

	return (
		<div className="my-4 flex w-full flex-col bg-[#121212] px-6 py-4">
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
					{isList ? (
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
			<div className="grid w-full flex-col" style={{ gridTemplateColumns: gridTableSetting }}>
				<div className="text-center">#</div>
				<div>Название</div>
				<div />
				<div>Data</div>
				<div> </div>
				<div className="flex justify-center ">
					<IoIosTimer />
				</div>
			</div>
			{arr.map((track, i) => {
				return (
					<div
						className="grid h-[54px] w-full flex-col items-center overflow-hidden
                        rounded-xl transition hover:bg-neutral-400/5
                        "
						style={{ gridTemplateColumns: gridTableSetting }}
					>
						<div className="text-center">{i + 1}</div>
						<div className="flex items-center justify-start">
							<img
								className="h-[40px]"
								src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
								alt="/"
							/>
						</div>
						<div>Name</div>
						<div>01.01.2000</div>
						<div className="flex justify-start ">
							<FaHeart fill="rgba(255, 0, 0, 1)" />
						</div>
						<div className="flex justify-center ">
							<IoIosTimer />
						</div>
					</div>
				);
			})}
		</div>
	);
};
