import { AlbumInterface } from "entities/Album";

interface LibraryItemProps {
	album: AlbumInterface;
}

export const LibraryItem: React.FC<LibraryItemProps> = ({album}: LibraryItemProps) => {

	return (
		<div className="flex hover:bg-neutral-400/10 transition-all">
				<div className="flex justify-center items-center
				aspect-square h-[34px] bg-gray-400">
					<img src={album.imagePath} alt="" />
				</div>
				<div className="flex justify-start items-center pl-2 w-full overflow-hidden">
					<div className="select-none text-neutral-300 text-ellipsis 
					whitespace-nowrap tracking-wide w-full overflow-hidden"
					>
						<span className="font-medium">{album.author}</span> - 
						<span> {album.title}</span>
					</div>
				</div>
		</div>
	);
};
