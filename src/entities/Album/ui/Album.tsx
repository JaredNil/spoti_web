/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { useTransit } from 'shared/lib/hooks/useTransit/useTransit';
import { FaPlay } from 'react-icons/fa';
import { AlbumInterface } from '../model/types/album';

interface AlbumProps {
	data: AlbumInterface;
}

export const Album: React.FC<AlbumProps> = ({ data }: AlbumProps) => {
	const { id, user_id, author, imagePath, title } = data;

	const transit = useTransit();
	const clickAlbumHandler = () => {
		transit(`/playlist:${id}`);
	};

	return (
		<div
			className="group relative flex cursor-pointer flex-col 
				items-center justify-center gap-x-4 overflow-hidden 
				rounded-md  bg-neutral-400/5 px-3 py-2 transition-all
				hover:bg-neutral-400/10"
			onClick={clickAlbumHandler}
		>
			<div
				className=" relative aspect-square 
					h-full w-full 
					overflow-hidden rounded-md"
			>
				<img className="pointer-events-none w-full select-none object-cover" src={imagePath} alt="/" />
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 pt-2">
				<p className="w-full truncate font-semibold">{title}</p>
				<p className="w-full truncate pb-4 text-sm  text-neutral-400">By {author}</p>
			</div>
			<div
				className="absolute bottom-[32%] right-5 flex items-center justify-center rounded-full 
				bg-green-500 p-4 opacity-0 drop-shadow-md 
				transition hover:scale-110 group-hover:opacity-100
				"
			>
				<FaPlay className="text-black" />
			</div>
		</div>
	);
};
