import { FaPlay } from 'react-icons/fa';

import { AlbumInterface } from 'entities/Album';

import { usePlayer } from 'widgets/Player';

interface LibraryItemProps {
	album: AlbumInterface;
}

export const LibraryItem: React.FC<LibraryItemProps> = ({ album }: LibraryItemProps) => {
	const { start } = usePlayer();

	// const playerHandler = () => {
	// 	dispatch(playerAction.onActivePlayer())
	// 	// еще диспатчим фанку для доступа
	// }

	return (
		<div
			className="group 
		flex transition-all
		hover:bg-neutral-400/10"
		>
			<div
				className="flex aspect-square h-[34px]
				items-center justify-center bg-gray-400"
			>
				<img src={album.imagePath} alt="" />
			</div>
			<div
				className="relative flex w-full items-center justify-start overflow-hidden
				pl-2
			"
			>
				<div
					className="w-full select-none overflow-hidden text-ellipsis
					whitespace-nowrap text-sm tracking-wide text-neutral-300"
				>
					{album.id == 0 ? '' : <span className="font-medium">{album.author}</span>}
					{album.id == 0 ? '' : ` -	`}
					<span>{album.title}</span>
				</div>
				<div
					onClick={() => start(album.trackesId)}
					className="absolute bottom-1 right-2 flex aspect-square items-center justify-center rounded-full 
					bg-green-500 p-1 opacity-0 drop-shadow-md 
					transition hover:scale-110 group-hover:opacity-100
					"
				>
					<FaPlay className="scale-75 text-black" />
				</div>
			</div>
		</div>
	);
};
