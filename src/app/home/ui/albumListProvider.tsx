import { memo } from 'react'

import { getAlbumListTitle } from '../model/types/albumListType'
import { AlbumListType } from '../model/types/albumListType'

import {
	fetchAlbumsByUser,
	fetchAlbumsCommon,
	fetchAlbumsCommunity,
} from '@/app/api/album/handler'
import { AlbumInterface, Album } from '@/entities/album'

interface AlbumListProviderProps {
	type: AlbumListType
	classname?: string
}

export const AlbumListProvider: React.FC<AlbumListProviderProps> = memo(
	async ({ type, classname }: AlbumListProviderProps) => {
		const title = getAlbumListTitle(type)

		let albums: AlbumInterface[]

		switch (type) {
			case 'USER':
				albums = await fetchAlbumsByUser('1') // REFACTOR TO REQ BY USERID FROM DB
				break
			case 'COMMON':
				albums = await fetchAlbumsCommon()
				break
			case 'COMMUNITY':
				albums = await fetchAlbumsCommunity('1')
				break
			default:
				albums = []
				break
		}

		return (
			<>
				<span
					className="mb-3 mt-5 inline-block
					select-none rounded-lg 
					pr-4 text-2xl pointer-events-none"
				>
					{title}
				</span>
				{albums.length == 0 && (
					<div className="flex items-center w-full justify-center">
						Playlists does not exist.
					</div>
				)}
				<div
					className={`grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				    lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8
					${classname}`}
				>
					{albums.map((album) => (
						<Album key={album.id} data={album} />
					))}
				</div>
			</>
		)
	}
)
