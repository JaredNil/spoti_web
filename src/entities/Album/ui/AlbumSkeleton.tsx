import { memo } from 'react';

export const AlbumSceleton: React.FC = memo(() => {
	return (
		<div
			className="group relative flex cursor-pointer flex-col 
				items-center justify-center gap-x-4 overflow-hidden 
				rounded-md  bg-neutral-400/5 px-3 py-2 transition-all
				hover:bg-neutral-400/10"
		>
			<div
				className=" relative aspect-square 
					h-full w-full 
					overflow-hidden rounded-md"
			>
				<div className="sceleton h-full w-full"> </div>
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 pt-2">
				<p className="sceleton w-[80%] truncate font-semibold leading-6 text-transparent">Track title</p>
				<p className="sceleton mb-4 w-[55%]  truncate text-sm  leading-6 text-neutral-400 text-transparent">
					By spotify
				</p>
			</div>
		</div>
	);
});
