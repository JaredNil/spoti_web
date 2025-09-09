'use client'
import { FC } from 'react'

import { DropdownHeader } from '../dropdownHeader'

import { TrackesId } from '@/shared/api'
import { PlayButton } from '@/shared/ui/playButton/playButton'

interface TrackesHeadProps {
	trackesId?: TrackesId
	toggleList: () => void
	isCompact: boolean
}

export const TrackesHead: FC<TrackesHeadProps> = ({
	trackesId,
	toggleList,
	isCompact,
}) => {
	return (
		<div className="flex justify-between h-13">
			<div className="flex items-center">
				<div className="h-full aspect-square">
					{trackesId && (
						<PlayButton relayTrackesId={trackesId} type="album" />
					)}
				</div>
				<DropdownHeader />
			</div>

			<div
				className="flex cursor-pointer items-center justify-center"
				onClick={toggleList}
			>
				<span className="mr-2 select-none text-neutral-400">
					{!isCompact ? 'Cписок' : 'Компактный'}
				</span>
				<TrackesHeadIcons isCompact={isCompact} />
			</div>
		</div>
	)
}

const TrackesHeadIcons = ({ isCompact }: { isCompact: boolean }) => {
	if (!isCompact)
		return (
			<svg
				stroke="currentColor"
				fill="rgba(163, 163, 163, 1)"
				strokeWidth="0"
				viewBox="0 0 256 256"
				height="22"
				width="22"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M84,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H88A4,4,0,0,1,84,64Zm132,60H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM44,120a8,8,0,1,0,8,8A8,8,0,0,0,44,120Zm0-64a8,8,0,1,0,8,8A8,8,0,0,0,44,56Zm0,128a8,8,0,1,0,8,8A8,8,0,0,0,44,184Z"></path>
			</svg>
		)
	else
		return (
			<svg
				stroke="currentColor"
				fill="rgba(163, 163, 163, 1)"
				strokeWidth="0"
				viewBox="0 0 256 256"
				height="22"
				width="22"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>
			</svg>
		)
}
