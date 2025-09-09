import { AlbumsCollection } from './ui/albumsCollection'
import { BringAuth } from './ui/bringAuth'
import { HomeTitle } from './ui/homeTitle'
import { QuickBar } from './ui/quickBar'

import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Home' })

const Home = async () => {
	return (
		<>
			<HomeTitle />
			<QuickBar />

			<AlbumsCollection type={'USER'} />
			<BringAuth />
			<AlbumsCollection type={'COMMON'} />
			<AlbumsCollection type={'COMMUNITY'} classname="mt-10" />
		</>
	)
}

export default Home
