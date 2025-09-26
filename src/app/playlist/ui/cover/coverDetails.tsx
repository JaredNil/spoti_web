import Image from 'next/image'
import { ReactNode, SetStateAction } from 'react'

import {
	CoverSkeletonCreation,
	CoverSkeletonDesc,
	CoverSkeletonImage,
	CoverSkeletonImageMobile,
	CoverSkeletonLabel,
} from '../piece/coverSkeleton'

import { Album } from '@/shared/api'
import { Button } from '@/shared/ui/kit/button'

export const CoverImageDesktop = (props: {
	isLoadingAlbum: boolean
	classname: string
	imageHash?: string
}) => (
	<div className={props.classname}>
		{props.isLoadingAlbum && <CoverSkeletonImage />}
		{!props.isLoadingAlbum && (
			<Image
				src="/content/cover/album-placeholder.webp"
				width={300}
				height={300}
				loading="lazy"
				className="pointer-events-none select-none 
				h-full w-full aspect-square"
				alt="cover"
			/>
		)}
	</div>
)
export const CoverImageMobile = (props: {
	isLoadingAlbum: boolean
	classname: string
	album?: Album
	imageHash?: string
}) => (
	<div className={props.classname}>
		<div
			className="relative flex items-center 
			justify-center aspect-square w-[70%]"
		>
			{props.isLoadingAlbum && <CoverSkeletonImageMobile />}
			{props.album && !props.isLoadingAlbum && (
				<Image
					src="/content/cover/album-placeholder.webp"
					width={300}
					height={300}
					className="p-1 pointer-events-none select-none w-full"
					alt="cover"
				/>
			)}
		</div>
	</div>
)

export const CoverInformation = (props: {
	isLoadingAlbum: boolean
	classname: string
	album?: Album
	imageRender: ReactNode
}) => (
	<div className={props.classname}>
		<div className="relative sm:flex sm:flex-col sm:grow sm:justify-center">
			<h1
				className="text-sm font-light select-none 
				sm:absolute sm:-top-5 sm:text-lg"
			>
				Плейлист
			</h1>
			{props.isLoadingAlbum && <CoverSkeletonLabel />}
			{props.album && !props.isLoadingAlbum && (
				<h2
					className="text-2xl font-bold w-full 
					pr-24 sm:pr-0 min-h-[64px]
					line-clamp-2 break-words overflow-hidden
					sm:text-5xl"
				>
					{props.album.title}
				</h2>
			)}
		</div>

		{props.imageRender}

		<div className="w-full">
			{props.isLoadingAlbum && <CoverSkeletonDesc />}
			{props.album && !props.isLoadingAlbum && (
				<h3
					className="text-sm select-none
					min-h-[40px]
					line-clamp-2 break-words overflow-hidden"
				>
					{props.album.description}
				</h3>
			)}
			<div
				className="flex items-end justify-end min-h-[20px]
				w-full text-sm select-none truncate"
			>
				{props.isLoadingAlbum && <CoverSkeletonCreation />}
				{props.album && !props.isLoadingAlbum && (
					<>
						<span className="font-bold">{props.album?.author}</span>
						{props.album?.creationDate && (
							<span>
								,{' '}
								{new Date(
									props.album.creationDate
								).toLocaleDateString()}
							</span>
						)}
					</>
				)}
			</div>
		</div>
	</div>
)

export const CoverEditButton = (props: {
	classname: string
	showEdit: boolean
	setShowEdit: (value: SetStateAction<boolean>) => void
}) => (
	<div className={props.classname}>
		<Button
			variant={'outline'}
			onClick={() => props.setShowEdit((v) => !v)}
			className="text-sm w-20 border-green-500"
		>
			{props.showEdit ? 'Cancel' : 'Edit'}
		</Button>
	</div>
)
