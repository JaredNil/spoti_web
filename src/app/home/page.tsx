import { AlbumListType } from './model/types/albumListType'
import HomeHeader from './ui/homeHeader'
import { fetchAlbumsByUser } from '../api/album/handler'
import { fetchTrackByHash } from '../api/track/handler'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	const publicAlbums = await fetchAlbumsByUser('0')
	const userAlbums = await fetchAlbumsByUser('1') // REFACTOR TO REQ BY USERID FROM DB

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
			{/* <audio src={vktrack} controls></audio> */}
		</>
	)
}

export default Home
