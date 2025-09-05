import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { AlbumInterface } from '@/shared/api'

interface PlaylistTitleProps {
	albumId: string
	albumPreload: AlbumInterface
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = ({
	albumId,
	albumPreload,
}: PlaylistTitleProps) => {
	const { author, title, description, creationDate } = albumPreload

	return (
		<div className="title__wrapper ">
			<div className="title__cover-left">
				{/* {isLoadingData ? (
					<div
						className="sceletonPlaylist relative aspect-square overflow-hidden
						rounded-md "
					/>
				) : ( */}
				<Image
					src={'/content/cover/album-placeholder.webp'}
					width={300}
					height={300}
					loading="lazy"
					alt="cover"
				/>
				{/* )} */}
			</div>
			<div className="title__block">
				<div className="title__upper">
					<h1 className="title__upper-playlist">Плейлист</h1>
					<h2 className="title__upper-naming">
						{/* {isLoadingData ? (
							<div className="sceletonTitle">Playlist </div>
						) : ( */}
						{title}
						{/* )} */}
					</h2>
				</div>
				<div className="title__cover-center ">
					{/* {isLoadingData ? (
						<div className="sceletonPlaylist relative aspect-square overflow-hidden rounded-md " />
					) : ( */}
					<Image
						src={'/content/cover/album-placeholder.webp'}
						width={300}
						height={300}
						alt="cover"
					/>
					{/* )} */}
				</div>
				<div className="title__description">
					{description && (
						<div className="title__description-info">
							<h3>{description}</h3>
						</div>
					)}
					<div className={twMerge('title__description-author')}>
						<span
							className={twMerge(
								'font-bold'
								// isLoadingData && 'sceletonTitle'
							)}
						>
							{author}
						</span>
						{creationDate && <span>, {creationDate}</span>}
					</div>
				</div>
			</div>
		</div>
	)
}
