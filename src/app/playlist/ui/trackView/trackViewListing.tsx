import Image from 'next/image'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoIosTimer } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

import { Trackes } from '@/shared/api/track'
import { PlayButton } from '@/shared/ui/playButton/playButton'

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
					`playlist__table grid w-full flex-col items-center`,
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
					Автор
				</div>
				<div className="flex items-center justify-center">
					<FaRegHeart fill="rgba(255, 0, 0, 1)" />
				</div>
			</div>
			{trackes?.map((track, i) => {
				return (
					<div
						key={track.id}
						className={twMerge(
							`playlist__table grid w-full flex-col items-center overflow-hidden
							group
							rounded-xl transition hover:bg-neutral-400/5`,
							isCompact && 'playlist__compact'
						)}
					>
						<div
							className="table-id h-full aspect-square text-center relative overflow-hidden
							pointer-events-none select-none "
						>
							<div className="h-full w-full flex items-center justify-center relative">
								{i + 1}
							</div>
							<div
								className="absolute top-0 left-0 overflow-hidden h-full w-full 
								flex items-center justify-center
								transition-all duration-100
								opacity-0 group-hover:opacity-200
								"
							>
								<div className="w-[80%] h-[80%] flex items-center justify-center">
									<PlayButton
										key={track.id}
										relayTrackesId={[track.id]}
										classname=""
									/>
								</div>
							</div>
						</div>
						<div className="table-image h-full flex items-center justify-center">
							<Image
								className="lg:w-[100%] w-[60%] aspect-square select-none"
								src={track.imageLink || ''}
								width={20}
								height={20}
								alt="track image"
							/>
						</div>
						<div className="truncate pl-2">{track.title}</div>
						<div className="table-data select-auto">
							{track.author}
						</div>
						<div
							className="flex cursor-pointer items-center justify-center"
							onClick={onLikeTrack}
						>
							{/* <FaRegHeart fill="rgba(255, 0, 0, 1)" /> */}
							<FaHeart fill="rgba(255, 0, 0, 1)" />
						</div>
					</div>
				)
			})}
		</div>
	)
}
