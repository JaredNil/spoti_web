'use client';

import { Song } from 'app/App';
import { Input } from 'shared/ui/Input/Input';
import MediaItem from 'shared/ui/MediaItem/MediaItem';

// import { Song } from '@/types';
// import MediaItem from '@/components/MediaItem';
// import LikeButton from '@/components/LikeButton';
// import useOnPlay from '@/hooks/useOnPlay';

interface SearchContentProps {
	songs: Song[];
	isLoadingPage: boolean;
}

export const SearchContent: React.FC<SearchContentProps> = ({ songs, isLoadingPage }: SearchContentProps) => {
	if (isLoadingPage) {
		const sceletonSearchList = new Array(10).fill('').map((_, i) => String(i));

		return (
			<>
				<Input
					type="text"
					disabled
					className="sceleton xl:w-[50%]"
					placeholder="Scarlxrd...  architect...   genre..."
				/>
				<div className="my-3 flex flex-col ">
					{sceletonSearchList.map((key, i) => {
						return (
							<div
								key={key}
								className="group relative my-2 flex cursor-pointer 
								items-center gap-x-4 
								overflow-hidden rounded-md bg-neutral-100/10 
								pr-4 transition 
								hover:bg-neutral-100/20  xl:w-[50%]"
							>
								<div className="relative h-[64px] w-[64px]">
									<div className="sceleton h-full w-full object-cover  " />
								</div>
								<div className="flex w-[50%] flex-col">
									<p className="sceleton mb-2 w-full truncate py-2 font-medium" />
									<p className="sceleton w-[60%] truncate py-3  font-medium" />
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	}

	if (songs.length === 0) {
		return (
			<div
				className="
          flex 
          w-full 
          flex-col 
          gap-y-2 
          text-neutral-400
        "
			>
				No songs found.
			</div>
		);
	}

	return (
		<div className="flex w-full flex-col gap-y-2">
			{songs.map((song: Song) => (
				<div key={song.id} className="flex w-full items-center gap-x-4">
					<div className="flex-1">
						<MediaItem
							onClick={() => {}}
							// onClick={(id: string) => onPlay(id)}
							data={song}
						/>
					</div>
					{/* <LikeButton songId={song.id} /> */}
				</div>
			))}
		</div>
	);
};
