import { memo } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { getIsLoadingData } from '../model/selector/playListPageSelector';

interface PlaylistTitleProps {
	imagePath?: string;
	title?: string;
	author?: string;
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = memo(({ imagePath, title, author }: PlaylistTitleProps) => {
	const isLoadingData = useSelector(getIsLoadingData);

	return (
		<div className=" title__wrapper ">
			<div className="title__cover-left">
				{isLoadingData ? (
					<div
						className="sceletonPlaylist relative aspect-square overflow-hidden
						rounded-md "
					/>
				) : (
					<img src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019" alt="/" />
				)}
			</div>
			<div className="title__block">
				<div className="title__upper">
					<div className="title__upper-playlist">Плейлист</div>
					<div className="title__upper-naming">
						{isLoadingData ? (
							<div className="sceletonTitle">Playlist </div>
						) : (
							'Название плейлиста'
						)}
					</div>
				</div>
				<div className="title__cover-center ">
					{isLoadingData ? (
						<div className="sceletonPlaylist relative aspect-square overflow-hidden rounded-md " />
					) : (
						<img
							src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
							alt="/"
						/>
					)}
				</div>
				<div className="title__description">
					<div className="title__description-info">
						<span className={twMerge(isLoadingData && 'sceletonTitle')}>
							LoremLoremLoremLorem Lorem
						</span>
					</div>
					<div className={twMerge('title__description-author')}>
						<span className={twMerge('font-bold', isLoadingData && 'sceletonTitle')}>
							{isLoadingData ? '' : 'JaredN'}
						</span>
						<span className={twMerge(isLoadingData && 'sceletonTitle')}>, 2077</span>
					</div>
				</div>
			</div>
		</div>
	);
});
