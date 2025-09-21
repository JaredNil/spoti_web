import Image from 'next/image'

import { Album } from '@/shared/api'

interface PlaylistTitleProps {
	albumPreload: Album
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = ({
	albumPreload,
}: PlaylistTitleProps) => {
	const { author, title, description, creationDate } = albumPreload

	return (
		<div className="title__wrapper ">
			<div className="title__cover-left">
				<Image
					src={'/content/cover/album-placeholder.webp'}
					width={300}
					height={300}
					loading="lazy"
					alt="cover"
				/>
			</div>
			<div className="title__block">
				<div className="title__upper">
					<h1 className="title__upper-playlist">Плейлист</h1>
					<h2 className="title__upper-naming">{title}</h2>
				</div>
				<div className="title__cover-center ">
					<Image
						src={'/content/cover/album-placeholder.webp'}
						width={300}
						height={300}
						alt="cover"
					/>
				</div>
				<div className="title__description">
					{description && (
						<div className="title__description-info">
							<h3>{description}</h3>
						</div>
					)}
					<div className={'title__description-author'}>
						<span className={'font-bold'}>{author}</span>
						{creationDate && (
							<span>
								, {new Date(creationDate).toLocaleDateString()}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
