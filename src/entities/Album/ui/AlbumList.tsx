import { memo } from 'react';
import { AlbumInterface } from '../model/types/album';
import { Album } from './Album';

interface AlbumListProps {
	albums: AlbumInterface[];
	title?: string;
}

export const AlbumList: React.FC<AlbumListProps> = memo(({ albums, title }: AlbumListProps) => {
	// const onPlay = useOnPlay(songs);

	if (!albums) {
		return (
			<>
				<h2 className="my-2 text-2xl font-semibold text-white">{title || 'Uploader feature'}</h2>
				<div
					className="
				grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
				lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
				>
					Пустой листинг
				</div>
			</>
		);
	}
	if (albums.length === 0) {
		return <div className="mt-4 text-neutral-400">Albums list empty.</div>;
	}

	return (
		<>
			<h2 className="my-2 text-2xl font-semibold text-white">{title || 'Uploader feature'}</h2>
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
	);
});
