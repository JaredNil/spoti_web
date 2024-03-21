export const AlbumSceleton: React.FC = () => {
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
				<div className="sceleton" />
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 py-2">
				<span className="sceleton mb-1 w-[80%] truncate pb-3 font-semibold text-neutral-400" />
				<span className="sceleton w-[40%] truncate pb-4 text-sm  text-neutral-400" />
			</div>
		</div>
	);
};
