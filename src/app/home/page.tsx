import { Metadata } from 'next'

import { AlbumListType } from './model/types/albumListType'
import HomeHeader from './ui/homeHeader'
import { fetchAlbumById, fetchAlbumByUser } from '../api/album/handler'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { AlbumInterface } from '@/entities/album'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	const publicAlbums = await fetchAlbumByUser('0')
	const userAlbums = await fetchAlbumByUser('1') // REFACTOR TO REQ BY USERID FROM DB

	return (
		<>
			<HomeHeader />
			<QuickBar />

			<AlbumListProvider
				type={AlbumListType.COMMON}
				albums={publicAlbums}
			/>
			<AlbumListProvider type={AlbumListType.USER} albums={userAlbums} />
			<BringAuth />
		</>
	)
}

export default Home
