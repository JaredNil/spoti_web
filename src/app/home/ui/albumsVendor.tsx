import { JSX } from 'react'

import { AlbumsByUserClient } from './piece/albumsByUserClient'

import {
	fetchAlbumsJarefy,
	fetchAlbumsCommunity,
} from '@/app/api/album/handler'
import { AlbumCard, Album } from '@/entities/album'
import { AlbumsCollection } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export type AlbumListType = 'COMMON' | 'USER' | 'COMMUNITY'

const getAlbumListTitle = (type: AlbumListType): string => {
	if (type === 'COMMON') return 'Common Jarefy playlist'
	else if (type === 'USER') return 'My playlist'
	else if (type === 'COMMUNITY') return 'Playlists other users'
	return 'Какие-то плейлисты'
}

interface AlbumsVendorProps {
	type: AlbumListType
	classname?: string
}

export const AlbumsVendor: React.FC<AlbumsVendorProps> = async ({
	type,
	classname,
}) => {
	const title = getAlbumListTitle(type)

	let albums: AlbumsCollection | null = null
	if (type === 'COMMON') albums = await fetchAlbumsJarefy()

	return (
		<>
			<span
				className="mb-3 mt-5 inline-block
				select-none rounded-lg 
				pr-4 text-2xl pointer-events-none"
			>
				{title}
			</span>
			{albums && albums.length == 0 && (
				<div className="flex items-center w-full justify-center">
					Playlists does not exist.
				</div>
			)}
			<div
				className={`grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8
				${classname}`}
			>
				{/* Server albums */}
				{type === 'COMMON' && albums ? (
					albums.map((album, index) => (
						<AlbumCard
							key={album.hash + index.toString()}
							data={album}
						/>
					))
				) : (
					//Client albums
					<AlbumsByUserClient type={type} />
				)}
			</div>
		</>
	)
}
