import { memo } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { getAlbum, getIsLoadingData } from '../model/selector/playlistPageSelector';

interface PlaylistTitleProps {
	imagePath?: string;
	title?: string;
	author?: string;
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = memo(({ imagePath, title, author }: PlaylistTitleProps) => {
	const isLoadingData = useSelector(getIsLoadingData);
	const album = useSelector(getAlbum)


	return (
		<div className=" title__wrapper ">
			<div className="title__cover-left">
				{isLoadingData ? (
					<div
						className="sceletonPlaylist relative aspect-square overflow-hidden
						rounded-md "
					/>
				) : (
					<img src={album?.imagePath} alt="cover" />
				)}
			</div>
			<div className="title__block">
				<div className="title__upper">
					<div className="title__upper-playlist">Плейлист</div>
					<div className="title__upper-naming">
						{isLoadingData ? (
							<div className="sceletonTitle">Playlist </div>
						) : (
							album?.title
						)}
					</div>
				</div>
				<div className="title__cover-center ">
					{isLoadingData ? (
						<div className="sceletonPlaylist relative aspect-square overflow-hidden rounded-md " />
					) : (
						<img src={album?.imagePath} alt="cover" />

					)}
				</div>
				<div className="title__description">
				{
					(album?.description)
					? 	<div className="title__description-info">
							<span className={twMerge(isLoadingData && 'sceletonTitle')}>
								{album?.description}
							</span>
						</div>
					: ''
				}
					<div className={twMerge('title__description-author')}>
						<span className={twMerge('font-bold', isLoadingData && 'sceletonTitle')}>
							{isLoadingData ? '' : album?.author}
						</span>
						{
							album?.creationDate 
							?  <span className={twMerge(isLoadingData && 'sceletonTitle')}>, {album.creationDate.getFullYear()}</span>
							: ''
						}
					</div>
				</div>
			</div>
		</div>
	);
});
