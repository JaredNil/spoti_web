import { Metadata } from 'next'

import { AlbumListType } from './model/types/albumListType'

import { AlbumListProvider, QuickBar, BringAuth } from '@/app/home'
import { fetchAlbums } from '@/entities/album'
import { AlbumInterface } from '@/shared/api/album'

export const metadata: Metadata = {
	title: 'Jarefy',
	description:
		'Jarefy - это музыкальный сервис, который позволяет слушать музыку словно в Spotify, а также слушать музыку, которая была добавлена в избранное.',
	keywords: ['Jarefy', 'Музыка', 'Spotify', 'Искусство'],
}

const HomeLayout = async () => {
	// const username = useAppSelector(getUsername)

	const isLoadingData = false
	const username = 'sth'

	const commonAlbums = await fetchAlbums(0)

	const userAlbums = await fetchAlbums(1)

	return (
		<>
			<div className="mb-2">
				<h1 className="relative text-3xl font-semibold text-white select-none">
					{`Welcome back,  Гость`}
				</h1>
			</div>

			<div className="mt-2">
				<QuickBar />

				<AlbumListProvider
					type={AlbumListType.COMMON}
					isLoadingData={isLoadingData}
					albums={commonAlbums}
				/>

				{username && (
					<AlbumListProvider
						isLoadingData={isLoadingData}
						type={AlbumListType.USER}
						albums={userAlbums}
					/>
				)}
				{!username && <BringAuth isLoadingData={isLoadingData} />}
			</div>
		</>
	)
}

export default HomeLayout
