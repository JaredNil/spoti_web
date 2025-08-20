import { Metadata } from 'next'

import { AlbumListType } from './model/types/albumListType'
import HomeHeader from './ui/homeHeader'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { fetchAlbums } from '@/entities/album'

export const metadata: Metadata = {
	title: 'Jarefy',
	description:
		'Jarefy - это музыкальный сервис, который позволяет слушать музыку словно в Spotify, а также слушать музыку, которая была добавлена в избранное.',
	keywords: ['Jarefy', 'Музыка', 'Spotify', 'Искусство'],
}

const Home = async () => {
	const commonAlbums = await fetchAlbums(0)
	const userAlbums = await fetchAlbums(1)

	return (
		<>
			<HomeHeader svUsername={'User'} />
			<QuickBar />
			<AlbumListProvider
				type={AlbumListType.COMMON}
				albums={commonAlbums}
			/>
			<AlbumListProvider type={AlbumListType.USER} albums={userAlbums} />
			<BringAuth />
		</>
	)
}

export default Home
