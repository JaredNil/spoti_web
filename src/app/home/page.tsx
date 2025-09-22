import { AlbumsVendor } from './ui/albumsVendor'
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

			<AlbumsVendor type={'USER'} />
			<BringAuth />
			<AlbumsVendor type={'COMMON'} />
			<AlbumsVendor type={'COMMUNITY'} />
		</>
	)
}

export default Home
