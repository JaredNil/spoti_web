import { AlbumFlat } from 'entities/Album';
import { AlbumSceletonFlat } from 'entities/Album/ui/AlbumSceletonFlat';

interface QuickBarProps {
	isLoadingData: boolean;
}

export const QuickBar: React.FC<QuickBarProps> = ({ isLoadingData }: QuickBarProps) => {
	return (
		<div
			className="mt-4 grid grid-cols-1 gap-3  
					sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{isLoadingData ? (
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
