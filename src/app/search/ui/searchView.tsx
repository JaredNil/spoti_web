'use client'

import { useState } from 'react'
import { PiListBulletsThin, PiListLight } from 'react-icons/pi'

import { SearchLoading } from './piece/searchLoading'

import { Dropdown } from '@/app/playlist/ui/dropdown'
import { TrackViewListing } from '@/app/playlist/ui/trackView/trackViewListing'
import { Trackes, TrackesId } from '@/shared/api'

interface SearchViewProps {
	trackes: Trackes
	trackesId: TrackesId
	isLoading: boolean
}

export const SearchView: React.FC<SearchViewProps> = ({
	trackes,
	trackesId,
	isLoading,
}: SearchViewProps) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList(!isCompact)
	return (
		<div
			className="my-4 flex w-full flex-col bg-[#121212] px-6 py-4
			tracklist__mainWrapper"
		>
			<div className="flex justify-between h-13">
				<div className="flex items-center">
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

			{isLoading ? (
				<SearchLoading />
			) : (
				<TrackViewListing
					isCompact={isCompact}
					trackesId={trackesId}
					trackes={trackes}
				/>
			)}
		</div>
	)
}
