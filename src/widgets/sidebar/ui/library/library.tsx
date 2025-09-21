import { LibraryCreation } from './libraryCreation'
import { LibraryItem } from './libraryItem'

import { fetchAlbumsByUser } from '@/app/api/album/handler'
import { WidgetLoader } from '@/shared/ui/widgetLoader'

export const Library: React.FC = async () => {
	const isLoading = false

	const albums = await fetchAlbumsByUser('0')

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
					{albums.map((item, index) => (
						<LibraryItem
							album={item}
							key={item.hash + index.toString()}
						/>
					))}
				</div>
			)}
		</>
	)
}
