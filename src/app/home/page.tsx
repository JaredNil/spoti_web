import HomeHeader from './ui/homeHeader'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	return (
		<>
			<HomeHeader />
			<QuickBar />

			<AlbumListProvider type={'USER'} />
			<BringAuth />
			<AlbumListProvider type={'COMMON'} />
			<AlbumListProvider type={'COMMUNITY'} classname="mt-10" />
		</>
	)
}

export default Home
