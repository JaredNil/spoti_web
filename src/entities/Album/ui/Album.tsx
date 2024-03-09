// import { useRouter } from 'next/navigation';
import { FaPlay } from 'react-icons/fa';
import { AlbumInterface } from '../model/types/album';

// import useAuthModal from '@/hooks/useAuthModal';
// import { useUser } from '@/hooks/useUser';

interface AlbumProps {
	data: AlbumInterface;
}

export const Album: React.FC<AlbumProps> = ({ data }: AlbumProps) => {
	// const router = useRouter();
	// const authModal = useAuthModal();
	// const { user } = useUser();

	// const onClick = () => {
	// 	if (!user) {
	// 		return authModal.onOpen();
	// 	}
	// 	router.push(href);
	// };

	return (
		<div
			className="group relative flex cursor-pointer flex-col 
				items-center justify-center gap-x-4 overflow-hidden 
				rounded-md  bg-neutral-400/5 p-3 transition  
				hover:bg-neutral-400/10"
		>
			<div
				className=" relative aspect-square 
					h-full w-full 
					overflow-hidden rounded-md"
			>
				<img className="w-full object-cover" src={data.image_path} alt="/" />
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 pt-4">
				<p className="w-full truncate font-semibold">{data.title}</p>
				<p className="w-full truncate pb-4 text-sm  text-neutral-400">By {data.author}</p>
			</div>
			<div className="absolute bottom-24 right-5">
				{`>>`}
				{/* <PlayButton /> */}
			</div>
		</div>
	);
};
