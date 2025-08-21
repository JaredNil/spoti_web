import { AlbumsCollection } from '@/shared/api/album'

export const ALBUMS: AlbumsCollection = [
	{
		author: 'Spotify',
		id: 0,
		title: 'Популярные треки',
		user_id: 0,
		trackes_id: [3, 9, 10, 16, 17],
		creationDate: new Date(2016, 6, 13),
	},
	{
		author: 'Architects',
		id: 1,
		title: 'Best trackes',
		user_id: 0,
		trackes_id: [0, 1, 2],
		creationDate: new Date(2016, 6, 13),
	},
	{
		author: 'Cyberpunk',
		id: 2,
		title: 'Cyberpunk game OST',
		user_id: 1,
		trackes_id: [4, 5, 6, 7, 8],
		creationDate: new Date(2020, 10, 4),
	},
	{
		author: 'DVRST',
		id: 3,
		title: 'Best',
		user_id: 1,
		trackes_id: [9, 10],
		creationDate: new Date(2019, 1, 26),
	},
	{
		author: 'Istasha The Scrub',
		id: 4,
		title: 'Stump',
		user_id: 1,
		trackes_id: [11, 12, 13, 14, 15],
		creationDate: new Date(2017, 12, 3),
	},
	{
		author: 'Kito ft. Reija Lee',
		id: 5,
		title: 'UserAlbum',
		user_id: 1,
		trackes_id: [16, 17],
		creationDate: new Date(2014, 2, 1),
	},
]
