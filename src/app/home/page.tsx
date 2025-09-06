import HomeTitle from './ui/homeTitle'

import { AlbumsCollection, QuickBar, BringAuth } from '@/app/home'
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
