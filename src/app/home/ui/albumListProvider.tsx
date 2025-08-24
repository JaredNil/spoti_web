import { memo } from 'react'

import { getAlbumListTitle } from '../model/types/albumListType'
import { AlbumListType } from '../model/types/albumListType'

import { AlbumInterface, Album } from '@/entities/album'

interface AlbumListProviderProps {
	type: AlbumListType
	albums: AlbumInterface[]
}

export const AlbumListProvider: React.FC<AlbumListProviderProps> = memo(
	({ albums = [], type }: AlbumListProviderProps) => {
		const title = getAlbumListTitle(type)

		return (
			<>
				<span
					className="mb-3 mt-5 inline-block
					select-none rounded-lg 
					pr-4 text-2xl pointer-events-none"
				>
					{title}
				</span>
				<div
					className="
				    grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				    lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
				>
					{albums.map((album) => (
						<Album key={album.id} data={album} />
					))}
				</div>
			</>
		)
	}
)
