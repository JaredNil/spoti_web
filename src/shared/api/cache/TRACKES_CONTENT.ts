const atmImg = '/atm.png'
const heavyMetalImg = '/heavy_metal.webp'
const trapMetalImg = '/trap_metal.webp'
const burn = '/content/playlist/Architects burn down my house.mp3'
const doomsday = '/content/playlist/Architects Doomsday.mp3'
const animals = '/content/playlist/Architects_Animals.mp3'
const spam =
	'/content/playlist/blxdssed feat. Istasha the Scrub — Spam Folder.mp3'
const bring =
	'/content/playlist/Bring_Me_The_Horizon_Jeris_Johnson_-_Can_You_Feel_My_Heart.mp3'
const really =
	'/content/playlist/Cyberpunk I Really Want to Stay at Your House.mp3'
const V = '/content/playlist/Cyberpunk — V.mp3'
const CloseEyes = '/content/playlist/DVRST Close Eyes.mp3'
const Endless = '/content/playlist/DVRST Endless Love.mp3'
const elefant = '/content/playlist/istasha the scrub — elefant.mp3'
const gothe =
	'/content/playlist/Istasha The Scrub — gothicketchup. (www.lightaudio.ru).mp3'
const canbeangel =
	'/content/playlist/Istasha The Scrub — I can be your angle, or yuor devil (www.lightaudio.ru).mp3'
const rouch =
	'/content/playlist/Istasha The Scrub — Roach Latency (feat. Kamaara ).mp3'
const runCover = '/content/playlist/Kito feat. Reija Lee — Run For Cover.mp3'
const sweet = '/content/playlist/Kito ft. Reija Lee — Sweet Talk.mp3'
const rebel = '/content/playlist/P.T. Adamczyk The Rebel Path.mp3'
const nosave =
	'/content/playlist/Run The Jewels, El-P, Killer Mike — No Save Point.mp3'
const chippin = '/public/content/playlist/SAMURAI — Chippin In.mp3'

import { Trackes } from '@/shared/api/track'

export const TRACKES: Trackes = [
	{
		id: 0,
		userId: 1,
		author: 'Architects',
		title: 'Animals',
		songLink: animals,
		imageLink: heavyMetalImg,
	},
	{
		id: 1,
		userId: 1,
		author: 'Architects',
		title: 'Burn down my house',
		songLink: burn,
		imageLink: trapMetalImg,
	},
	{
		id: 2,
		userId: 1,
		author: 'Architects',
		title: 'Doomsday',
		songLink: doomsday,
		imageLink: atmImg,
	},
	{
		id: 3,
		userId: 0,
		author: 'Bring me horizon',
		title: 'Can You Feel My Heart',
		songLink: bring,
		imageLink: heavyMetalImg,
	},
	{
		id: 4,
		userId: 1,
		author: 'Cyberpunk',
		title: 'V',
		songLink: V,
		imageLink: atmImg,
	},
	{
		id: 5,
		userId: 1,
		author: 'Cyberpunk',
		title: 'I Really Want to Stay at Your House',
		songLink: really,
		imageLink: atmImg,
	},
	{
		id: 6,
		userId: 1,
		author: 'Cyberpunk',
		title: 'The rebel path',
		songLink: rebel,
		imageLink: atmImg,
	},
	{
		id: 7,
		userId: 1,
		author: 'Run The Jewels',
		title: 'No Save Point',
		songLink: nosave,
		imageLink: atmImg,
	},
	{
		id: 8,
		userId: 1,
		author: 'SAMURAI',
		title: 'Chippin In',
		songLink: chippin,
		imageLink: atmImg,
	},

	{
		id: 9,
		userId: 0,
		author: 'DVRST',
		title: 'Close Eyes',
		songLink: CloseEyes,
		imageLink: trapMetalImg,
	},
	{
		id: 10,
		userId: 0,
		author: 'DVRST',
		title: 'Endless Love',
		songLink: Endless,
		imageLink: trapMetalImg,
	},

	{
		id: 11,
		userId: 1,
		author: 'Istasha The Scrub',
		title: 'Spam Folder',
		songLink: spam,
		imageLink: trapMetalImg,
	},
	{
		id: 12,
		userId: 1,
		author: 'Istasha The Scrub',
		title: 'elefant',
		songLink: elefant,
		imageLink: trapMetalImg,
	},
	{
		id: 13,
		userId: 1,
		author: 'Istasha The Scrub',
		title: 'gothicketchup.',
		songLink: gothe,
		imageLink: trapMetalImg,
	},
	{
		id: 14,
		userId: 1,
		author: 'Istasha The Scrub',
		title: 'I can be your angle, or yuor devil',
		songLink: canbeangel,
		imageLink: trapMetalImg,
	},
	{
		id: 15,
		userId: 1,
		author: 'Istasha The Scrub',
		title: 'Roach Latency',
		songLink: rouch,
		imageLink: trapMetalImg,
	},
	{
		id: 16,
		userId: 0,
		author: 'Kito ft. Reija Lee',
		title: 'Run For Cover',
		songLink: runCover,
		imageLink: heavyMetalImg,
	},
	{
		id: 17,
		userId: 0,
		author: 'Kito ft. Reija Lee',
		title: 'Sweet Talk',
		songLink: sweet,
		imageLink: heavyMetalImg,
	},
]
