import { AlbumInterface } from 'entities/Album';

import trapMetalImg from 'shared/assets/webp/trap_metal.webp';
import heavyMetalImg from 'shared/assets/webp/heavy_metal.webp';
import atmImg from 'shared/assets/png/atm.png';

export const getAlbumsCommonDefault = (id: number): AlbumInterface[] => {
	return [
		{
			author: 'Spotify',
			id,
			imagePath: trapMetalImg,
			title: 'Trap Metal',
			user_id: 0,
		},
		{
			author: 'Spotify',
			id,
			imagePath: heavyMetalImg,
			title: 'Heavy Metal',
			user_id: 0,
		},
		{
			author: 'Spotify',
			id,
			imagePath: atmImg,
			title: 'Atmosphera',
			user_id: 0,
		},
	];
};
