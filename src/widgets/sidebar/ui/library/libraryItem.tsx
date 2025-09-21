import Image from 'next/image'
import Link from 'next/link'

import { Album } from '@/entities/album'
import { PlayButton } from '@/shared/ui/playButton/playButton'

interface LibraryItemProps {
	album: Album
}

export const LibraryItem: React.FC<LibraryItemProps> = ({
	album,
}: LibraryItemProps) => (
	<div
		className="flex relative
			hover:bg-neutral-400/10 transition-all
			group"
	>
		<div
			className="flex justify-center items-center
				aspect-square h-[34px] bg-gray-400"
		>
			<Image
				src={'/content/cover/album-placeholder.webp'}
				className="h-full w-full"
				width={60}
				height={60}
				alt=""
			/>
		</div>

		<div className="flex justify-start items-center pl-2 w-full overflow-hidden relative">
			<div
				className="select-none text-neutral-300 text-ellipsis text-sm
					whitespace-nowrap tracking-wide w-full overflow-hidden"
			>
				{album && album?.hash === '0' ? '' : ' '}
				<span className="font-medium">{album?.author}</span>
				{album && album?.hash === '0' ? '' : ` - `}
				<span>{album?.title}</span>
			</div>
			<Link
				href={`/playlist/${album.hash}`}
				className="absolute w-full h-full top-0 left-0 "
			/>
			<div className="relative h-3/4 opacity-0 group-hover:opacity-100 right-1">
				<PlayButton relayTrackesId={album.trackesHash} type="album" />
			</div>
		</div>
	</div>
)
