import { RectangleEllipsis } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { TrackViewButton } from './trackViewButton'
import { TrackViewListingSearch } from './trackViewListingSearch'
import { DropdownTrack } from '../dropdownTrack'

import { SearchEmpty } from '@/app/search/ui/piece/searchEmpty'
import {
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} from '@/entities/album/api/albumApi'
import { AlbumInterface, Track, Trackes, TrackesId } from '@/shared/api'
import { Button } from '@/shared/ui/kit/button'

interface TrackViewListingProps {
	trackesId: TrackesId
	isCompact: boolean
	type?: 'vendor' | 'add'
	albumPageId?: string
}

export const TrackEditListing: React.FC<TrackViewListingProps> = ({
	trackesId,
	isCompact,
	type = 'vendor',
	albumPageId = undefined,
}: TrackViewListingProps) => {
	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
	}

	const trackes = [] as Trackes

	// update data handlers - NOT SOURCE FOR RENDER
	const [updateTrack, { isLoading: isUpdating }] = useUpdateAlbumMutation()
	const [fetchAlbum] = useLazyFetchAlbumQuery()
	const onAddTrack = (track: Track) => {
		if (!albumPageId) return
		fetchAlbum(albumPageId).then((r) => {
			const album = r.data as AlbumInterface
			const updateAlbum = Object.assign({}, album)
			updateAlbum.trackesId = [...album.trackesId, track.id]
			updateTrack(updateAlbum)
		})
	}

	if (trackes.length === 0) {
		return <SearchEmpty />
	} else
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
						Naming
					</div>
					<div className="table-image" />
					<div className="table-data pointer-events-none select-none">
						Author
					</div>
					<div className="flex items-center justify-center">
						<FaRegHeart fill="rgba(255, 0, 0, 1)" />
					</div>
					<div className="flex items-center justify-center">
						<RectangleEllipsis />
					</div>
				</div>

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
							<div
								className="flex items-center justify-center
								cursor-pointer"
								onClick={onLikeTrack}
							>
								{/* <FaRegHeart fill="rgba(255, 0, 0, 1)" /> */}
								<FaHeart fill="rgba(255, 0, 0, 1)" />
							</div>
							<div
								className="flex cursor-pointer 
								items-center justify-center"
							>
								{type == 'vendor' && <DropdownTrack />}
								{type == 'add' && (
									<Button
										disabled={isUpdating}
										onClick={() => onAddTrack(track)}
										className="py-1 px-2 text-sm
										 text-neutral-700 bg-green-500 rounded-lg
										hover:bg-green-600/70 transition-colors
										"
									>
										Add
									</Button>
								)}
							</div>
						</div>
					)
				})}
			</div>
		)
}
