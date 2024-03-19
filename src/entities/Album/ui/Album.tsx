/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { AlbumInterface } from '../model/types/album';

interface AlbumProps {
	data?: AlbumInterface;
}

export const Album: React.FC<AlbumProps> = ({ data }: AlbumProps) => {
	const {
		imagePath = 'https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c',
		author = 'JaredN',
		href = '/',
		id = '/',
		title = 'NO_DATA',
		user_id = 'global',
	} = data;
	const navigate = useNavigate();

	// console.log(imagePath);
	// const router = useRouter();
	// const authModal = useAuthModal();
	// const { user } = useUser();

	// const onClick = () => {
	// 	if (!user) {
	// 		return authModal.onOpen();
	// 	}
	// 	router.push(href);
	// };
	const clickAlbumHandler = () => {
		navigate('/playlist');
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
