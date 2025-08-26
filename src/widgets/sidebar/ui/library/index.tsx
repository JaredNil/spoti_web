import { LibraryCreation } from './libraryCreation'
import { LibraryItem } from '../libraryItem'

import { fetchAlbumsByUser } from '@/entities/album'
import { WidgetLoader } from '@/shared/ui/widgetLoader'

export const Library: React.FC = async () => {
	const isLoading = false

	const userAlbums = await fetchAlbumsByUser(1)

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
					{userAlbums.map((item) => (
						<LibraryItem album={item} key={item.id} />
					))}
				</div>
			)}
		</>
	)
}
