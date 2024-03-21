// import { useRouter } from 'next/navigation';
import { FaPlay } from 'react-icons/fa';

// import useAuthModal from '@/hooks/useAuthModal';
// import { useUser } from '@/hooks/useUser';

export const AlbumSceletonFlat: React.FC = () => {
	return (
		<button
			type="button"
			className="group relative flex cursor-pointer items-center gap-x-4 overflow-hidden rounded-md  bg-neutral-100/10 pr-4 transition  hover:bg-neutral-100/20"
		>
			<div className="relative h-[64px] w-[64px]">
				<div className="sceleton h-full w-full object-cover  " />
			</div>
			<div className="flex w-[50%] flex-col">
				<p className="sceleton mb-2 w-full truncate py-2 font-medium" />
				<p className="sceleton w-[60%] truncate py-3  font-medium" />
			</div>
			<div
				className="absolute right-5 flex items-center justify-center rounded-full 
				bg-green-500 p-4 opacity-0 drop-shadow-md 
				transition hover:scale-110 group-hover:opacity-100
				"
			>
				<FaPlay className="text-black" />
			</div>
		</button>
	);
};
