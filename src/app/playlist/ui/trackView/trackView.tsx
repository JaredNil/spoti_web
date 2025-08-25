'use client'

import { useState } from 'react'
import { PiListBulletsThin, PiListLight } from 'react-icons/pi'
import { twMerge } from 'tailwind-merge'

import { TrackViewListing } from './trackViewListing'
import { TrackViewSkeleton } from './trackViewSkeleton'
import { Dropdown } from '../dropdown'

import { AlbumInterface } from '@/entities/album'
import { Trackes } from '@/shared/api/track'
import { PlayButton } from '@/shared/ui/playButton/playButton'

interface TrackListProps {
	trackes: Trackes
	album: AlbumInterface
	onShowModal?: (id: number) => void
}

const isLoadingTrackes = false

export const TrackViewVender: React.FC<TrackListProps> = ({
	onShowModal,
	trackes,
	album,
}: TrackListProps) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList(!isCompact)

	return (
		<div
			className="my-4 flex w-full flex-col bg-[#121212] px-6 py-4
			tracklist__mainWrapper"
		>
			<div className="flex justify-between h-13">
				<div className="flex items-center">
					<div className="h-full aspect-square">
						<PlayButton
							relayTrackesId={album.trackes_id}
							type="album"
						/>
					</div>
					<Dropdown />
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
					trackesId={album.trackes_id}
					trackes={trackes}
					// onShowModal={onShowModal}
				/>
			)}
		</div>
	)
}
