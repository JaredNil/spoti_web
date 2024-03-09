import SongItem from 'shared/ui/SongItem/SongItem';

import { AlbumInterface } from '../model/types/album';
import { Album } from './Album';

export const AlbumList: React.FC = () => {
	// const onPlay = useOnPlay(songs);

	const userAlbum: AlbumInterface[] = [
		{
			id: '1',
			user_id: '1',
			author: 'JaredN',
			title: 'First playlist',
			href: 'string',
			image_path: 'https://i.scdn.co/image/ab67616d00001e02f2133fc8964b505a08e5d4a3',
		},
		{
			id: '2',
			user_id: '2',
			author: 'JaredN',
			title: '3',
			href: 'string',
			image_path: 'https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019',
		},
		{
			id: '3',
			user_id: '3',
			author: 'JaredN',
			title: '3',
			href: 'string',
			image_path: 'https://i.scdn.co/image/ab67616d00001e02bd5aa8f695dffd8ae83ff2e9',
		},
	];

	if (userAlbum.length === 0) {
		return <div className="mt-4 text-neutral-400">No songs available.</div>;
	}

	return (
		<div
			className="
            mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"
		>
			{userAlbum.map((album) => (
				<Album key={album.id} data={album} />
			))}
		</div>
	);
};
