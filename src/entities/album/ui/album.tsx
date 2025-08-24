import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'

import { AlbumInterface } from '../index'

// import { usePlayer } from 'widgets/Player';

interface AlbumProps {
	data: AlbumInterface
}

export const Album: React.FC<AlbumProps> = ({ data }: AlbumProps) => {
	const {
		id,
		author,
		imagePath = '/album-placeholder.webp',
		title,
		trackes_id,
	} = data

	return (
		<Link
			href={`/playlist/${id}`}
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
				<Image
					src={imagePath}
					alt={title}
					loading="lazy"
					className="pointer-events-none w-full select-none object-cover"
					width={200}
					height={200}
					priority={false}
				/>
			</div>
			<div className="flex w-full flex-col items-start gap-y-1 pt-2">
				<p className="w-full truncate font-semibold">{title}</p>
				<p className="w-full truncate pb-4 text-sm  text-neutral-400">
					By {author}
				</p>
			</div>
			<div
				// onClick={()=> start(trackes_id)}
				className="absolute bottom-[32%] right-5 flex items-center justify-center rounded-full 
				bg-green-500 p-4 opacity-0 drop-shadow-md 
				transition hover:scale-110 group-hover:opacity-100
				"
			>
				<FaPlay className="text-black pointer-events-none" />
			</div>
		</Link>
	)
}
