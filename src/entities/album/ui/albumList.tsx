// import { memo } from 'react';
// import { Album } from '../model/types/album';
// import { Album } from './Album';
// import { AlbumSceleton } from './AlbumSkeleton';

// interface AlbumListProps {
// 	albums: Album[];
// 	title?: string;
// 	isLoadingPage?: boolean;
// }

// export const AlbumList: React.FC<AlbumListProps> = memo(({ albums, title, isLoadingPage }: AlbumListProps) => {
// 	if (isLoadingPage) {
// 		return (
// 			<>
// 				<span
// 					className="sceletonHeader mb-3 mt-5
// 					inline-block h-full w-80 max-w-[50%] select-none
// 					rounded-lg text-2xl text-transparent"
// 				>
// 					_
// 				</span>
// 				<div
// 					className="
// 				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3
// 				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
// 				>
// 					{/* {sceletonAlbum.map((album) => (
// 						<AlbumSceleton key={album} />
// 					))} */}
// 				</div>
// 			</>
// 		);
// 	}

// 	if (!albums) {
// 		return (
// 			<>
// 				<h2 className="my-2 text-2xl font-semibold text-white">{title || 'Uploader feature'}</h2>
// 				<div
// 					className="
// 				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3
// 				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
// 				>
// 					Пустой листинг
// 				</div>
// 			</>
// 		);
// 	}
// 	if (albums.length === 0) {
// 		return <div className="mt-4 text-neutral-400">Albums list empty.</div>;
// 	}

// 	return (
// 		<>
// 			<h2 className="my-2 text-2xl font-semibold text-white">{title || 'Uploader feature'}</h2>
// 			<div
// 				className="
// 				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3
// 				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
// 			>
// 				{albums.map((album) => (
// 					<Album key={album.id} />
// 				))}
// 			</div>
// 		</>
// 	);
// });
