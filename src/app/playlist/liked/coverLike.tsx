'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'

import {
	CoverImageDesktop,
	CoverImageMobile,
	CoverInformation,
} from '../ui/cover/coverDetails'

import { Album } from '@/entities/album'

export const CoverLike = () => {
	const { data } = useSession()
	const name = data?.user?.name ?? ''

	const album: Album = {
		author: name ?? '',
		hash: '',
		title: 'Liked trackes',
		trackesHash: [],
		creationDate: undefined,
		description: 'Твои понравившиеся треки',
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
				isLoadingAlbum={false}
				imageHash="/content/cover/liked-songs-640.png"
			/>
			<CoverInformation
				classname="relative flex flex-col w-full 
				sm:pl-[220px] sm:h-[220px]  sm:justify-between"
				isLoadingAlbum={false}
				album={album}
				imageRender={
					<CoverImageMobile
						classname="relative flex items-center justify-center 
						sm:hidden"
						isLoadingAlbum={false}
						album={album}
						imageHash="/content/cover/liked-songs-640.png"
					/>
				}
			/>
		</div>
	)
}
