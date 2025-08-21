import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoIosTimer } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

import { Trackes } from '@/shared/api/track'

interface TrackViewListingProps {
	trackes?: Trackes
	isCompact: boolean
	onShowModal?: (id: number) => void
}

export const TrackViewListing: React.FC<TrackViewListingProps> = ({
	trackes = [],
	isCompact,
	onShowModal,
}: TrackViewListingProps) => {
	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
	}

	return (
		<div className="playlist__wrapper pb-[30px]">
			<div
				className={twMerge(
					`playlist__table mt-3 grid w-full flex-col items-center`,
					isCompact && 'playlist__compact',
					'h-6'
				)}
			>
				<div className="table-id pointer-events-none select-none text-center">
					#
				</div>
				<div className=" pointer-events-none select-none font-extralight">
					Название
				</div>
				<div className="table-image" />
				<div className="table-data pointer-events-none select-none">
					Релиз
				</div>
				<div className="table-timer flex justify-center ">
					<IoIosTimer />
				</div>
				<div className="flex h-full justify-center">
					<FaHeart fill="rgba(255, 0, 0, 1)" />
				</div>
			</div>
			{trackes?.map((track, i) => {
				return (
					<div
						key={track.id}
						className={twMerge(
							`playlist__table grid w-full flex-col items-center overflow-hidden
							rounded-xl transition hover:bg-neutral-400/5`,
							isCompact && 'playlist__compact'
						)}
						// onClick={() => onShowModal(1)}
					>
						<div className="table-id pointer-events-none select-none text-center">
							{i + 1}
						</div>
						<div className="table-image flex items-center justify-start">
							<img
								className="h-[40px]"
								src={track.imageLink}
								alt="track image"
							/>
						</div>
						<div>{track.title}</div>
						{/* <div className="table-data">{`${albumCreationDate?.getDate()}.${albumCreationDate?.getMonth()}.${albumCreationDate?.getFullYear()}`}</div> */}
						<div className="table-timer flex justify-center ">
							N/A
							{/* {track.songDuration} */}
						</div>
						<div
							className="flex h-full items-center justify-center"
							onClick={onLikeTrack}
						>
							<FaHeart fill="rgba(255, 0, 0, 1)" />
						</div>
					</div>
				)
			})}
		</div>
	)
}
