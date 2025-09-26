'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'

import {
	CoverImageDesktop,
	CoverImageMobile,
	CoverInformation,
} from '../ui/cover/coverDetails'

import { Album } from '@/entities/album'
import { useFetchUserQuery } from '@/entities/user/api/userApi'

export const CoverLoad = () => {
	const { data } = useSession()
	const email = data?.user?.email ?? ''
	const name = data?.user?.name ?? ''
	const { data: userData, isLoading: isLoadingAlbum } = useFetchUserQuery(
		email ?? skipToken
	)

	const album: Album = {
		author: name,
		hash: '',
		title: 'Load trackes',
		trackesHash: userData?.trackesHash ?? [],
		creationDate: undefined,
		description: 'Твои загруженные треки',
		imagePath: '',
	}

	return (
		<div
			className="flex flex-col items-center justify-start
			relative 
			sm:min-h-[220px]"
		>
			<CoverImageDesktop
				classname="hidden absolute top-0 left-0 
				aspect-square w-[220px] h-[220px]
				sm:block"
				isLoadingAlbum={isLoadingAlbum}
			/>
			<CoverInformation
				classname="relative flex flex-col w-full 
				sm:pl-[220px] sm:h-[220px]  sm:justify-between"
				isLoadingAlbum={isLoadingAlbum}
				album={album}
				imageRender={
					<CoverImageMobile
						classname="relative flex items-center justify-center 
						sm:hidden"
						isLoadingAlbum={isLoadingAlbum}
						album={album}
					/>
				}
			/>
		</div>
	)
}
