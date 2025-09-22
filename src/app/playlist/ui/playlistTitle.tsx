'use client'
import Image from 'next/image'
import { useState } from 'react'

import { PlaylistTitleEdit } from './playlistTitleEdit'

import { useFetchAlbumQuery } from '@/entities/album'
import { Button } from '@/shared/ui/kit/button'

interface PlaylistTitleProps {
	albumHash: string
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = ({
	albumHash,
}: PlaylistTitleProps) => {
	const { data: album, isLoading: isLoadingAlbum } =
		useFetchAlbumQuery(albumHash)

	const [showEdit, setShowEdit] = useState(false)

	return (
		<>
			<div
				className="flex flex-col items-center justify-start
			max-w-[700px] relative
			sm:flex-row sm:min-h-[220px] sm:h-[220px]"
			>
				<div
					className="hidden aspect-square
				sm:block sm:relative sm:top-0 sm:left-0 sm:h-full "
				>
					<Image
						src="/content/cover/album-placeholder.webp"
						width={300}
						height={300}
						loading="lazy"
						className="pointer-events-none select-none h-full w-full aspect-square"
						alt="cover"
					/>
				</div>

				<div
					className="flex flex-col w-full 
				sm:h-full sm:ml-4 sm:justify-between"
				>
					<div className="relative sm:flex sm:flex-col sm:grow sm:justify-center">
						<h1 className="text-sm font-light select-none sm:absolute sm:-top-5 sm:text-lg">
							Плейлист
						</h1>
						{album?.title && (
							<h2 className="text-2xl font-bold select-none sm:text-5xl sm:grow sm:h-full sm:flex sm:items-center">
								{album.title}
							</h2>
						)}
					</div>

					<div className="relative flex items-center justify-center min-h-[300px] sm:hidden">
						<div className="relative flex items-center justify-center aspect-square w-[70%]">
							<Image
								src="/content/cover/album-placeholder.webp"
								width={300}
								height={300}
								className="p-1 pointer-events-none select-none w-full"
								alt="cover"
							/>
						</div>
					</div>

					<div className="w-full">
						{album?.description && (
							<div className="w-full pt-1 text-sm select-none truncate">
								<h3>{album.description}</h3>
							</div>
						)}
						<div className="flex items-end justify-end w-full text-sm select-none">
							<span className="font-bold">{album?.author}</span>
							{album?.creationDate && (
								<span>
									,{' '}
									{new Date(
										album.creationDate
									).toLocaleDateString()}
								</span>
							)}
						</div>
					</div>
				</div>
				<div
					className="absolute top-1 right-0
					cursor-pointer pointer-events-auto"
				>
					<Button
						variant={'outline'}
						onClick={() => setShowEdit((v) => !v)}
						className="text-sm w-20 border-green-500"
					>
						{showEdit ? 'Cancel' : 'Edit'}
					</Button>
				</div>
			</div>

			{showEdit && album && (
				<PlaylistTitleEdit
					album={album}
					initial={{
						title: album.title,
						description: album.description ?? '',
						imagePath: album.imagePath ?? '',
					}}
					onClose={() => setShowEdit(false)}
				/>
			)}
		</>
	)
}
