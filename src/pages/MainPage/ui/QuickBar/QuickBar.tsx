import { AlbumFlat,AlbumSceletonFlat } from 'entities/Album';
import likedImage from 'shared/assets/mainpage/liked-songs-640.png'
import loadedImage from 'shared/assets/mainpage/1235.png'

interface QuickBarProps {
	isLoadingData: boolean;
}

const quickBarList = [
	{
		name:"Liked trackes",
		image: likedImage,
		href:"liked"
	},
	{
		name:"Loaded trackes",
		image: loadedImage,
		href:""
	}
]

export const QuickBar: React.FC<QuickBarProps> = ({ isLoadingData }: QuickBarProps) => {

	if (isLoadingData){
		return <div
		className="mt-4 grid grid-cols-1 gap-3  
				sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{ quickBarList.map(()=><AlbumSceletonFlat />) }
		</div>
	} else {
		return <div
			className="mt-4 grid grid-cols-1 gap-3  
					sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{ quickBarList.map((bar)=>{
				return 	<AlbumFlat
				name={bar.name}
				image={bar.image}
				href={bar.href}
			/>
			}) }

		</div>

	}
};
