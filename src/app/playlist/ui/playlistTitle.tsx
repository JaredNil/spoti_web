import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { AlbumInterface } from '@/entities/album'

interface PlaylistTitleProps {
	album: AlbumInterface
}

const isLoadingData = false

export const PlaylistTitle: React.FC<PlaylistTitleProps> = ({
	album,
}: PlaylistTitleProps) => {
	const {
		imagePath = '/album-placeholder.webp',
		title = 'Playlist',
		description = '',
		creationDate,
	} = album

	return (
		<div className="title__wrapper ">
			<div className="title__cover-left">
				{isLoadingData ? (
					<div
						className="sceletonPlaylist relative aspect-square overflow-hidden
						rounded-md "
					/>
				) : (
					<Image
						src={imagePath}
						width={300}
						height={300}
						loading="lazy"
						alt="cover"
					/>
				)}
			</div>
			<div className="title__block">
				<div className="title__upper">
					<div className="title__upper-playlist">Плейлист</div>
					<div className="title__upper-naming">
						{isLoadingData ? (
							<div className="sceletonTitle">Playlist </div>
						) : (
							title
						)}
					</div>
				</div>
				<div className="title__cover-center ">
					{isLoadingData ? (
						<div className="sceletonPlaylist relative aspect-square overflow-hidden rounded-md " />
					) : (
						<img src={imagePath} alt="cover" />
					)}
				</div>
				<div className="title__description">
					{description ? (
						<div className="title__description-info">
							<span
								className={twMerge(
									isLoadingData && 'sceletonTitle'
								)}
							>
								{description}
							</span>
						</div>
					) : (
						''
					)}
					<div className={twMerge('title__description-author')}>
						<span
							className={twMerge(
								'font-bold',
								isLoadingData && 'sceletonTitle'
							)}
						>
							{isLoadingData ? '' : album?.author}
						</span>
						{creationDate ? (
							<span
								className={twMerge(
									isLoadingData && 'sceletonTitle'
								)}
							>
								, {creationDate.getFullYear()}
							</span>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
