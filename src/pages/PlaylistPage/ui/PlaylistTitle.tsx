import { memo } from 'react';

interface PlaylistTitleProps {
	imagePath?: string;
	title?: string;
	author?: string;
}

export const PlaylistTitle: React.FC<PlaylistTitleProps> = memo(({ imagePath, title, author }: PlaylistTitleProps) => {
	return (
		<div className="flex h-40">
			<div className="h-full">
				<img src={imagePath} alt="/" className="pointer-events-none h-full select-none" />
			</div>
			<div className="flex flex-col justify-between pl-6">
				<div className="">
					<div className="select-none text-lg font-light">Плейлист</div>
					<div className="select-none text-5xl font-bold">{title}</div>
				</div>
				<div className="flex select-none">
					{author} <span>, 2077</span>
				</div>
			</div>
		</div>
	);
});
