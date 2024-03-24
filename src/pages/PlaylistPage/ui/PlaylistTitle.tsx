import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoadingData } from '../../MainPage/model/selector/MainpageSelector';

interface PlaylistTitleProps {
	imagePath?: string;
	title?: string;
	author?: string;
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = memo(({ imagePath, title, author }: PlaylistTitleProps) => {
	const isLoadingData = useSelector(getIsLoadingData);

	return (
		<>
			<div className="title__wrapper sm:hidden">
				<div className="title__cover1">
					<img src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019" alt="/" />
				</div>
				<div className="title__block">
					<div className="title__upper">
						<div className="title__upper-playlist">Плейлист</div>
						<div className="title__upper-naming">Название плейлиста</div>
					</div>
					<div className="title__cover2 ">
						<div>
							<img
								src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019"
								alt="/"
							/>
						</div>
					</div>
					<div className="title__description">
						<div className="title__description-info">LoremLoremLoremLorem Lorem</div>
						<div className="title__description-author">
							<span className="font-bold">JaredN</span> <span>, 2077</span>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden sm:flex ">
				<div className="title__cover1">
					<img src="https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019" alt="/" />
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
