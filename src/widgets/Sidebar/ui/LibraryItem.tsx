import { AlbumInterface } from "entities/Album";
import { FaPlay } from "react-icons/fa";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { playerAction } from "widgets/Player/model/slice/PlayerSlice";

interface LibraryItemProps {
	album: AlbumInterface;
}

export const LibraryItem: React.FC<LibraryItemProps> = ({ album }: LibraryItemProps) => {

	const dispatch = useAppDispatch();

	const playerHandler = () => {
		dispatch(playerAction.onActivePlayer())
		// еще диспатчим фанку для доступа
	}

	return (
		<div className="flex 
		hover:bg-neutral-400/10 transition-all
		group"
			onClick={playerHandler}
		>
			<div className="flex justify-center items-center
				aspect-square h-[34px] bg-gray-400">
				<img src={album.imagePath} alt="" />
			</div>
			<div className="flex justify-start items-center pl-2 w-full overflow-hidden
				relative
			">
				<div className="select-none text-neutral-300 text-ellipsis text-sm
					whitespace-nowrap tracking-wide w-full overflow-hidden"
				>
					{(album.id == 0) ? '' : <span className="font-medium">{album.author}</span>}
					{(album.id == 0) ? '' : ` -	`}
					<span>{album.title}</span>
				</div>
				<div
					className="absolute bottom-1 right-2 aspect-square flex items-center justify-center rounded-full 
					bg-green-500 p-1 opacity-0 drop-shadow-md 
					transition hover:scale-110 group-hover:opacity-100
					"
				>
					<FaPlay className="text-black scale-75" />
				</div>
			</div>
		</div>
	);
};
