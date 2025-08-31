import { Metadata } from 'next'

import { AlbumListType } from './model/types/albumListType'
import HomeHeader from './ui/homeHeader'
import { fetchAlbumById } from '../api/album/handler'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { AlbumInterface } from '@/entities/album'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	const userAlbums = await fetchAlbumById('0')

	return (
		<>
			<HomeHeader />
			<QuickBar />

			<AlbumListProvider
				type={AlbumListType.COMMON}
				albums={[userAlbums as AlbumInterface]}
			/>
			<AlbumListProvider
				type={AlbumListType.USER}
				albums={[userAlbums as AlbumInterface]}
			/>
			<BringAuth />
		</>
	)
}

export default Home
