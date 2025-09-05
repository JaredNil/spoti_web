import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { TrackViewButton } from './trackViewButton'
import { TrackViewListingLabel } from './trackViewListingLabel'
import { TrackViewListingLike } from './trackViewListingLike'
import { TrackViewListingSearch } from './trackViewListingSearch'
import { TrackViewSkeleton } from './trackViewSkeleton'

import { useFetchTrackesQuery } from '@/entities/track'
import { TrackesId } from '@/shared/api'

interface TrackViewListingProps {
	trackesId: TrackesId
	isCompact: boolean
}

export const TrackViewListing: React.FC<TrackViewListingProps> = ({
	trackesId,
	isCompact,
}: TrackViewListingProps) => {
	const { data: trackes, isLoading: isLoadingTrackes } =
		useFetchTrackesQuery(trackesId)

	if (isLoadingTrackes) {
		return <TrackViewSkeleton isCompact={isCompact} />
	}
	if (trackes) {
		if (trackes.length === 0) {
			return (
				<div className="select-none h-30 flex items-center justify-center text-neutral-400">
					В плейлисте отсутствуют треки.
				</div>
			)
		} else
			return (
				<div className="playlist__wrapper pb-[30px]">
					<TrackViewListingLabel isCompact />
					{trackes?.map((track, i) => {
						return (
							<div
								key={track.id + i.toString()}
								className={twMerge(
									`playlist__table grid
								w-full h-[50px] flex-col items-center justify-center 
								group rounded-xl transition hover:bg-neutral-400/5`,
									isCompact && 'playlist__compact'
								)}
							>
								<div
									className="h-full text-center
								relative overflow-hidden
								pointer-events-none select-none
								flex items-center justify-center"
								>
									<div className="relative w-full aspect-square">
										<TrackViewButton
											index={i}
											trackesId={trackesId}
											track={track}
										/>
									</div>
								</div>
								<div className="table-image h-full flex items-center justify-center">
									<Image
										className="lg:w-[100%] w-[60%] aspect-square select-none"
										src={'/content/cover/heavy_metal.webp'}
										width={20}
										height={20}
										alt="track image"
									/>
								</div>
								<div
									className="truncate h-full pl-2 
									flex items-center leading-none
									select-none cursor-pointer"
								>
									<Link href={`/track/${track.id}`}>
										{track.title}
									</Link>
								</div>
								<TrackViewListingSearch author={track.author} />
								<TrackViewListingLike />
							</div>
						)
					})}
				</div>
			)
	}
}
