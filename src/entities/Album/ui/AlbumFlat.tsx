import { FaPlay } from 'react-icons/fa';
import { useTransit } from 'shared/lib/hooks/useTransit/useTransit';
import { usePlayer } from 'widgets/Player';

interface ListItemProps {
	image: string;
	name: string;
	href: string;
}

export const AlbumFlat: React.FC<ListItemProps> = ({ image, name, href }: ListItemProps) => {
	
	const { play } = usePlayer()

	const transit = useTransit();

	const clickAlbumHandler = (event : React.MouseEvent<HTMLDivElement>) => {
		if ((event.target as EventTarget & HTMLDivElement)?.tagName != 'A')
			transit(`/playlist/0`);
	};

	return (
		<div
			onClick={clickAlbumHandler}
			className="group relative flex cursor-pointer items-center gap-x-4 overflow-hidden rounded-md  bg-neutral-100/10 pr-4 transition  hover:bg-neutral-100/20"
		>
			<div className="relative min-h-[64px] min-w-[64px]">
				<img className="max-h-[64px] object-cover" src={image} alt="logo" />
			</div>
			<p className="truncate py-5 font-medium">{name}</p>
			<a
				onClick={()=> play([0,1,2,3,4,5,6,7,8,9,10])}
				className="absolute right-5 flex items-center justify-center rounded-full 
				bg-green-500 p-4 opacity-0 drop-shadow-md 
				transition hover:scale-110 group-hover:opacity-100
				"
			>
				<FaPlay className="text-black pointer-events-none" />
			</a>
		</div>
	);
};
