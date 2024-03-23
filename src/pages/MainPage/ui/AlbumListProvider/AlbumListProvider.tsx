import { AlbumSceleton } from 'entities/Album';
import { countSkeleton } from 'pages/MainPage/model/service/countSkeleton';
import { memo } from 'react';

interface AlbumListProviderProps {
	title: string;
	isLoadingData: boolean;
}

export const AlbumListProvider: React.FC<AlbumListProviderProps> = memo(({ title, isLoadingData }: AlbumListProviderProps) => {
	if (isLoadingData) {
		const count = countSkeleton();

		const sceletonAlbum: string[] = new Array(count).fill('').map((_, i) => String(i));

		return (
			<>
				<span
					className="sceletonHeader mb-3 mt-5 
					inline-block h-full w-80 max-w-[50%] select-none 
					rounded-lg text-2xl text-transparent"
				>
					_
				</span>
				<div
					className="
				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
				>
					{sceletonAlbum.map((album) => (
						<AlbumSceleton key={album} />
					))}
				</div>
			</>
		);
	}
	return <>DATA</>;
});
