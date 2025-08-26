import { Metadata } from 'next'

import { AlbumListType } from './model/types/albumListType'
import HomeHeader from './ui/homeHeader'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { fetchAlbumsByUser } from '@/entities/album'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	const commonAlbums = await fetchAlbumsByUser(0)
	const userAlbums = await fetchAlbumsByUser(1)

	return (
		<>
			<HomeHeader hydrateUsername={'User'} />
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
