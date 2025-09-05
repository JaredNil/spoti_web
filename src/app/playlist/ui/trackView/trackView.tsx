'use client'

import { useState } from 'react'
import { PiListBulletsThin, PiListLight } from 'react-icons/pi'

import { TrackEdit } from './trackEdit'
import { TrackViewHeader } from './trackViewHeader'
import { TrackViewListing } from './trackViewListing'
import { TrackViewSkeleton } from './trackViewSkeleton'

import { AlbumInterface } from '@/entities/album'
import { useLazyFetchAlbumQuery } from '@/entities/album/api/albumApi'
import { PlayButton } from '@/shared/ui/playButton/playButton'

interface TrackViewProps {
	albumPreload: AlbumInterface
	albumId: string
}

export const TrackViewVender: React.FC<TrackViewProps> = ({
	albumPreload,
	albumId,
}: TrackViewProps) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	const [getAlbum, { data: album }] = useLazyFetchAlbumQuery()

	const updateAlbumPage = () => {
		getAlbum(albumId)
	}

	return (
		<div
			className="flex w-full flex-col
			bg-[#121212]
			my-4 px-6 py-4
			tracklist__mainWrapper"
		>
			<div className="flex justify-between h-13">
				<TrackViewHeader>
					<PlayButton
						relayTrackesId={
							album?.trackesId || albumPreload.trackesId
						}
						type="album"
					/>
				</TrackViewHeader>

				<div
					className="flex cursor-pointer items-center justify-center"
					onClick={toggleList}
				>
					<span
						onClick={updateAlbumPage}
						className="mr-2 select-none text-neutral-400"
					>
						{!isCompact ? 'Cписок' : 'Компактный'}
					</span>
					{!isCompact ? (
						<PiListBulletsThin
							size={22}
							fill="rgba(163, 163, 163, 1)"
						/>
					) : (
						<PiListLight size={22} fill="rgba(163, 163, 163, 1)" />
					)}
				</div>
			</div>

			<TrackViewListing
				isCompact={isCompact}
				trackesId={album?.trackesId || albumPreload.trackesId}
			/>

			<TrackEdit
				isCompact={isCompact}
				albumPageId={albumId}
				updateAlbumPage={updateAlbumPage}
			/>
		</div>
	)
}
