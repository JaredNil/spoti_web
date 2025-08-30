import { LibraryCreation } from './libraryCreation'
import { LibraryItem } from '../libraryItem'

import { fetchAlbumById } from '@/app/api/album/handler'
import { AlbumInterface } from '@/shared/api'
import { WidgetLoader } from '@/shared/ui/widgetLoader'

export const Library: React.FC = async () => {
	const isLoading = false

	// const userAlbums = await fetchAlbumsServer(1)
	const album = await fetchAlbumById('1')

	return (
		<>
			{isLoading && (
				<div className="h-300px">
					<WidgetLoader />
				</div>
			)}
			{!isLoading && (
				<div className="flex flex-col gap-y-1 px-5 py-4">
					<LibraryCreation />
					{[album as AlbumInterface].map((item) => (
						<LibraryItem album={item} key={item.id} />
					))}
				</div>
			)}
		</>
	)
}
