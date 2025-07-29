import { AlbumInterface, AlbumSceleton, Album } from '@/entities/album';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AlbumListType, getAlbumListTitle } from '../model/types/albumListType';
import { countSkeleton } from '../model/service/countSkeleton';

interface AlbumListProviderProps {
	isLoadingData: boolean;
	type: AlbumListType;
	albums: AlbumInterface[];
}

export const AlbumListProvider: React.FC<AlbumListProviderProps> = memo(({ isLoadingData, albums, type }: AlbumListProviderProps) => {
	const sceletonAlbum: string[] = new Array(countSkeleton()).fill('').map((_, i) => String(i));
	const title = getAlbumListTitle(type);
	const orderAlbum = [...albums].reverse();


	return (
		<>
			<span
				className={twMerge(
					`mb-3 mt-5 inline-block
					h-full select-none rounded-lg 
					pr-4 text-2xl `,
					isLoadingData && ' sceletonHeader text-transparent transition-all duration-500'
				)}
			>
				{!isLoadingData ? title : <span className="text-transparent">{title}</span>}
			</span>
			<div
				className="
				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
			>
				{isLoadingData
					? sceletonAlbum.map((album) => <AlbumSceleton key={album} />)
					: orderAlbum.reverse().map((album) => <Album key={album.id} data={album} />)}
			</div>
		</>
	);
});
