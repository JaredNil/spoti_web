'use client'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useState } from 'react'

import {
	CoverEditButton,
	CoverImageDesktop,
	CoverImageMobile,
	CoverInformation,
} from './cover/coverDetails'
import { CoverEdit } from './cover/coverEdit'
import { CoverError } from './piece/coverError'

import { useFetchAlbumQuery } from '@/entities/album'
interface PlaylistTitleProps {
	albumHash: string
}

export const Cover: React.FC<PlaylistTitleProps> = ({
	albumHash,
}: PlaylistTitleProps) => {
	const {
		data: album,
		isLoading: isLoadingAlbum,
		error,
	} = useFetchAlbumQuery(albumHash)

	const [showEdit, setShowEdit] = useState(false)

	// error handle
	if (error && (error as FetchBaseQueryError).status === 404)
		return <CoverError code={404} />
	if (error && (error as FetchBaseQueryError).status === 429)
		return <CoverError code={429} delayRedirect={5000} />
	if (error && (error as FetchBaseQueryError).status)
		return <CoverError code={400} />

	return (
		<>
			{/* common block */}
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
					classname="flex flex-col w-full 
					sm:pl-[220px] sm:h-[220px] sm:ml-4  sm:justify-between"
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
				<CoverEditButton
					classname="absolute top-1 right-0
					cursor-pointer pointer-events-auto"
					setShowEdit={setShowEdit}
					showEdit={showEdit}
				/>
				{showEdit && album && (
					<CoverEdit
						album={album}
						initial={{
							title: album.title,
							description: album.description ?? '',
							imagePath: album.imagePath ?? '',
						}}
						onClose={() => setShowEdit(false)}
					/>
				)}
			</div>
			{/* edit block */}
		</>
	)
}
