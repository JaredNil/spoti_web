'use client'

import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { PiListBulletsThin, PiListLight } from 'react-icons/pi'
import { twMerge } from 'tailwind-merge'

import { TrackViewListing } from './trackViewListing'
import { TrackViewSkeleton } from './trackViewSkeleton'

import { AlbumInterface } from '@/entities/album'
import { Trackes } from '@/shared/api/track'
import { usePlayer } from '@/widgets/player'

interface TrackListProps {
	trackes: Trackes
	albumIds?: number[]
	onShowModal?: (id: number) => void
}

const isLoadingTrackes = false

export const TrackViewVender: React.FC<TrackListProps> = ({
	onShowModal,
	trackes,
	albumIds,
}: TrackListProps) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList(!isCompact)

	const { start } = usePlayer()

	return (
		<div
			className={twMerge(
				'my-4 flex w-full flex-col bg-[#121212] px-6 py-4',
				'tracklist__mainWrapper'
			)}
		>
			<div className="flex justify-between">
				<div className="flex">
					<div
						onClick={() => {
							start(albumIds as number[])
						}}
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
						<HiOutlineDotsHorizontal
							size={32}
							className="text-neutral-400"
						/>
					</div>
				</div>

				<div className="flex cursor-pointer" onClick={toggleList}>
					{!isCompact ? (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">
								Cписок
							</span>
							<PiListBulletsThin
								size={22}
								fill="rgba(163, 163, 163, 1)"
							/>
						</div>
					) : (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">
								Компактный
							</span>
							<PiListLight
								size={22}
								fill="rgba(163, 163, 163, 1)"
							/>
						</div>
					)}
				</div>
			</div>

			{isLoadingTrackes ? (
				<TrackViewSkeleton isCompact={isCompact} />
			) : (
				<TrackViewListing
					isCompact={isCompact}
					trackes={trackes}
					// onShowModal={onShowModal}
				/>
			)}
		</div>
	)
}
