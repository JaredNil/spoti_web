import { memo } from 'react';

interface PlaylistTitleProps {
	imagePath?: string;
	title?: string;
	author?: string;
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = memo(({ imagePath, title, author }: PlaylistTitleProps) => {
	return (
		<>
			<div className="relative flex flex-col items-start justify-start sm:hidden">
				<div className="absolute left-[15%] top-[40px] hidden aspect-square w-[70%] sm:relative sm:left-0 sm:top-0 sm:h-full sm:w-auto">
					<img
						src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
						alt="/"
						className="pointer-events-none h-full w-full select-none"
					/>
				</div>
				<div className="flex w-full flex-col justify-between sm:ml-4">
					<div className="relative sm:flex sm:grow sm:flex-col sm:justify-center ">
						<div className=" select-none text-sm font-light sm:text-lg ">Плейлист</div>
						<div className="select-none text-2xl font-bold leading-5 sm:text-5xl">
							Название плейлиста
						</div>
					</div>
					<div className="relative flex w-full items-center justify-center">
						<div className="relative flex aspect-square w-[70%] items-center justify-center sm:hidden">
							<img
								src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
								alt="/"
								className="pointer-events-none w-full select-none p-1"
							/>
						</div>
					</div>
					<div className="w-full">
						<div className="flex w-full select-none truncate text-sm">
							LoremLoremLoremLorem Lorem
						</div>
						<div className=" flex w-full select-none items-end justify-end text-sm">
							<span className="font-bold">JaredN</span> <span>, 2077</span>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden h-40 flex-row justify-start sm:flex ">
				<div className="aspect-square h-full">
					<img
						src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
						alt="/"
						className="pointer-events-none h-full w-full select-none"
					/>
				</div>
				<div className=" ml-4 flex w-full flex-col justify-between">
					<div className="relative flex grow flex-col justify-center">
						<div className="absolute top-[-18px] select-none text-lg font-light ">
							Плейлист
						</div>
						<div className="select-none text-5xl font-bold ">Название плейлиста</div>
					</div>
					<div className="w-full">
						<div className="flex w-full select-none truncate text-sm">
							LoremLoremLoremLorem Lorem
						</div>
						<div className="flex select-none text-sm">
							<span className="font-bold">JaredN</span> <span>, 2077</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
