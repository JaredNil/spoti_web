'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'
import { Suspense } from 'react'

import { AlbumListType } from '../albumsVendor'

import { AlbumCard } from '@/entities/album'
import { useFetchAlbumsByUserQuery } from '@/entities/album/api/albumApi'

export const AlbumsByUserClient = ({ type }: { type: AlbumListType }) => {
	const { data } = useSession()
	const email = data?.user?.email
	const { data: albums, isSuccess } = useFetchAlbumsByUserQuery(
		email ?? skipToken
	)

	if (!albums && !isSuccess) return <div>Loading...</div>
	if (isSuccess && albums.length === 0)
		return (
			<div className="flex items-center w-full justify-center text-neutral-500">
				Empty
			</div>
		)
	return (
		<Suspense fallback="loading">
			{albums?.map((a, i) => (
				<AlbumCard key={a.hash + i.toString()} data={a} />
			))}
		</Suspense>
	)
}
