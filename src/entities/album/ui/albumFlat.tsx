'use client'
import Link from 'next/link'
import { JSX } from 'react'

import { TrackesHash } from '@/shared/api'
import { PlayButton } from '@/shared/ui/playButton/playButton'

interface ListItemProps {
	image: JSX.Element
	name: string
	href: string
	trackesHash?: TrackesHash
	isLoading: boolean
}

export const AlbumFlat: React.FC<ListItemProps> = ({
	image,
	name,
	href,
	trackesHash,
	isLoading,
}: ListItemProps) => {
	// const { data: album, isFetching } = useFetchAlbumQuery(albumId)

	return (
		<div
			className="group relative flex cursor-pointer items-center 
            gap-x-4 overflow-hidden rounded-md  bg-neutral-100/10 pr-4 transition  
            hover:bg-neutral-100/20"
		>
			<Link
				href={href}
				className=" block h-full w-full absolute top-0 left-0"
			/>
			<div className="relative min-h-[64px] min-w-[64px] pointer-events-none">
				{image}
			</div>
			<p className="truncate py-5 font-medium">{name}</p>

			<div
				className="absolute right-5 w-12 h-12 flex items-center justify-center rounded-full 
				bg-green-500 p-4 opacity-0 drop-shadow-md 
				transition hover:scale-110 group-hover:opacity-100
				"
			>
				{!isLoading && trackesHash && (
					<PlayButton
						classname="h-full"
						relayTrackesId={trackesHash}
						type="album"
					/>
				)}
			</div>
		</div>
	)
}
