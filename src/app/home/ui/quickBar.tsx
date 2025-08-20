import Image from 'next/image';

import { AlbumFlat,AlbumSceletonFlat } from '@/entities/album';

interface QuickBarProps {
	isLoadingData: boolean;
}

const quickBarList = [
	{
		name:"Liked trackes",
		image:  <Image
			src="/homepage/liked-songs-640.png"
			height={64} 
			width={64}
			alt="Liked trackes"
		/>,
		href:"liked"
	},
	{
		name:"Loaded trackes",
		image: <Image
			src="/homepage/1235.png"
			height={64} 
			width={64} 
			alt="Loaded trackes"
		/>,
		href:""
	}
]

export const QuickBar: React.FC<QuickBarProps> = ({ isLoadingData }: QuickBarProps) => {

	if (isLoadingData){
		return <div
			className="mt-4 grid grid-cols-1 gap-3  
			sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{ quickBarList.map(() => <AlbumSceletonFlat />) }
		</div>
	} else {
		return <div
			className="mt-4 grid grid-cols-1 gap-3  
			sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
		>
			{ quickBarList.map((bar, key) =>
				<AlbumFlat
					key={key}
					name={bar.name}
					image={bar.image}
					href={bar.href}
				/>
			)}
		</div>
	}
};
