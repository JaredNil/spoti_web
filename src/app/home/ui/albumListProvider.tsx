import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { getAlbumListTitle } from '../model/types/albumListType'
import { AlbumListType } from '../model/types/albumListType'

import { AlbumInterface, AlbumSceleton, Album } from '@/entities/album'

interface AlbumListProviderProps {
	isLoadingData?: boolean
	type: AlbumListType
	albums: AlbumInterface[]
}

const sceletonAlbum: string[] = new Array(4).fill('').map((_, i) => String(i))

export const AlbumListProvider: React.FC<AlbumListProviderProps> = memo(
	({ isLoadingData = false, albums, type }: AlbumListProviderProps) => {
		const title = getAlbumListTitle(type)

		return (
			<>
				<span
					className="mb-3 mt-5 inline-block
					h-full select-none rounded-lg 
					pr-4 text-2xl"
				>
					{title}
				</span>
				<div
					className="
				    grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				    lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
				>
					{isLoadingData
						? sceletonAlbum.map((_, index) => (
								<AlbumSceleton key={index} />
							))
						: albums.map((album) => (
								<Album key={album.id} data={album} />
							))}
				</div>
			</>
		)
	}
)
