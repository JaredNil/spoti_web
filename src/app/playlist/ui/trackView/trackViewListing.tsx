import Image from 'next/image'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { TrackViewButton } from './trackViewButton'

import { Trackes } from '@/shared/api/track'

interface TrackViewListingProps {
	trackes?: Trackes
	trackesId: number[]
	isCompact: boolean
	onShowModal?: (id: number) => void
}

export const TrackViewListing: React.FC<TrackViewListingProps> = ({
	trackes = [],
	trackesId,
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
							<TrackViewButton
								index={i}
								trackesId={trackesId}
								track={track}
							/>
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
