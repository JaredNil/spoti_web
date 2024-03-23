/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { useTransit } from 'shared/lib/hooks/useTransit/useTransit';
import { AlbumInterface } from '../model/types/album';

// interface AlbumProps {
// 	data: AlbumInterface;
// }

export const Album: React.FC = () => {
	const id = 0;
	const user_id = 0;
	const author = 'JaredN';
	const title = 'FirstAlbum';
	const imagePath = 'none';

	const transit = useTransit();

	const clickAlbumHandler = () => {
		transit('/playlist');
	};

	return (
		<div
			className="group relative flex cursor-pointer flex-col 
				items-center justify-center gap-x-4 overflow-hidden 
				rounded-md  bg-neutral-400/5 p-3 transition  
				hover:bg-neutral-400/10"
			onClick={clickAlbumHandler}
		>
			<div
				className=" relative aspect-square 
					h-full w-full 
					overflow-hidden rounded-md"
			>
				<img className="w-full object-cover" src={imagePath} alt="/" />
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 pt-4">
				<p className="w-full truncate font-semibold">{title}</p>
				<p className="w-full truncate pb-4 text-sm  text-neutral-400">By {author}</p>
			</div>
			<div className="absolute bottom-24 right-5">
				{`>>`}
				{/* <PlayButton /> */}
			</div>
		</div>
	);
};
