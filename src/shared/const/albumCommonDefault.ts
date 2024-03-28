import { AlbumInterface } from 'entities/Album';

import trapMetalImg from 'shared/assets/webp/trap_metal.webp';
import heavyMetalImg from 'shared/assets/webp/heavy_metal.webp';
import atmImg from 'shared/assets/png/atm.png';

export const getAlbumsCommonDefault = (id: number): AlbumInterface[] => {
	let idAlbum: number | null = id;
	if (id === -1) {
		idAlbum = null;
	}
	return [
		{
			author: 'Spotify',
			id: idAlbum,
			imagePath: trapMetalImg,
			title: 'Trap Metal',
			user_id: null,
		},
		{
			author: 'Spotify',
			id: idAlbum,
			imagePath: heavyMetalImg,
			title: 'Heavy Metal',
			user_id: null,
		},
		{
			author: 'Spotify',
			id: idAlbum,
			imagePath: atmImg,
			title: 'Atmosphera',
			user_id: null,
		},
	];
};
