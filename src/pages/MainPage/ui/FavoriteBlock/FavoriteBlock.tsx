import { AlbumFlat } from 'entities/Album';
import { AlbumSceletonFlat } from 'entities/Album/ui/AlbumSceletonFlat';

interface FavoriteBlockProps {
	isLoadingPage: boolean;
}

export const FavoriteBlock: React.FC<FavoriteBlockProps> = ({ isLoadingPage }: FavoriteBlockProps) => {
	return (
		<div
			className="mt-4 grid grid-cols-1 gap-3  
						sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{isLoadingPage ? (
				<AlbumSceletonFlat />
			) : (
				<AlbumFlat
					name="Liked Songs"
					image="https://misc.scdn.co/liked-songs/liked-songs-640.png"
					href="liked"
				/>
			)}
		</div>
	);
};
