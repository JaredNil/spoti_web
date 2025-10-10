'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'

import { LibraryCreation } from './libraryCreation'
import { LibraryItem } from './libraryItem'
import { LibraryItemSkeleton } from './libraryItemSkeleton'

import { useFetchAlbumsByUserQuery } from '@/entities/album/api/albumApi'

export const Library: React.FC = () => {
	const { data } = useSession()
	const email = data?.user?.email
	const { data: albums, isSuccess } = useFetchAlbumsByUserQuery(
		email ?? skipToken
	)

	if (!isSuccess || !albums) {
		return (
			<div className="flex flex-col gap-y-1 px-5 py-4">
				<LibraryCreation />
				{!isSuccess &&
					[0, 1, 2, 3].map((_, index) => (
						<LibraryItemSkeleton key={index} />
					))}
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-y-1 px-5 py-4">
			<LibraryCreation />
			{isSuccess && albums.length === 0 ? (
				<div className="h-[300px] flex items-center justify-center">
					<span className="text-sm text-common">
						U does't have albums
					</span>
				</div>
			) : (
				albums.map((item, index) => (
					<LibraryItem
						album={item}
						key={item.hash + index.toString()}
					/>
				))
			)}
		</div>
	)
}
