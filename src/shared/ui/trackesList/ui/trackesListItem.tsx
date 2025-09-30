import Image from 'next/image'
import Link from 'next/link'
import { FC, useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { baseRow, compactRow } from './grid'
import { TrackesListButton } from './trackesListButton'
import { TrackesListLike } from './trackesListLike'
import { TrackesListSearch } from './trackesListSearch'

import { Track, TrackesHash } from '@/shared/api'

interface TrackesListItemProps {
	relayTrackesId?: TrackesHash
	track: Track
	isCompact: boolean
	customButton?: React.ReactNode
	position: number
}

export const TrackesListItem: FC<TrackesListItemProps> = ({
	track,
	relayTrackesId,
	isCompact,
	position,
	customButton,
}) => {
	return (
		<div
			data-item
			className={twMerge(
				`group grid rounded-xl relative
				transition-colors hover:bg-neutral-400/5`,
				isCompact ? compactRow : baseRow,
				isCompact ? 'h-[34px]' : 'h-[50px]',
				`before:absolute before:left-1/2 before:top-0
				before:h-[0.3px] before:w-full before:-translate-x-1/2
				before:bg-neutral-400/10`
			)}
		>
			<div className="relative flex items-center justify-center">
				{relayTrackesId && (
					<TrackesListButton
						index={position}
						relayTrackesId={relayTrackesId}
						track={track}
					/>
				)}
			</div>
			<div
				className={
					isCompact ? 'hidden' : 'flex items-center justify-center'
				}
			>
				<Image
					className="lg:w-[100%] w-10 aspect-square select-none 
					cursor-grab active:cursor-grabbing"
					draggable={false}
					src={'/content/cover/heavy_metal.webp'}
					width={20}
					height={20}
					alt="track image"
				/>
			</div>
			<div
				className="truncate px-2
				flex items-center select-none"
			>
				<Link
					className="truncate py-3 pr-5"
					href={`/track/${track.hash}`}
				>
					{track.title}
				</Link>
			</div>
			<TrackesListSearch
				author={track.author}
				classname="hidden lg:flex"
			/>
			<TrackesListLike
				trackHash={track.hash}
				classname="hidden lg:flex"
			/>
			{customButton}
		</div>
	)
}
