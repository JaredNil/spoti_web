import Image from 'next/image'

import { fetchTrack } from '../model/fetchTrackes'

import { PlayButton } from '@/shared/ui/playButton/playButton'

export async function Track({ id }: { id: number }) {
	const track = await fetchTrack(id)

	return (
		<div
			className="relative flex items-center justify-between overflow-hidden
				h-auto
				cursor-pointer  gap-x-4  rounded-md
				bg-neutral-100/10  transition hover:bg-neutral-100/20
				md:flex-row flex-col md:h-40 md:pr-4 pt-6 md:pt-0"
		>
			<div
				className="flex h-full  pointer-events-none select-none
					md:flex-row flex-col md:items-end items-center"
			>
				<div className="relative h-full aspect-square ">
					<Image
						src={track.imageLink || '/homepage/1235.png'}
						alt={track.title}
						width={160}
						height={160}
						className="h-full w-full"
					/>
				</div>
				<div
					className="md:pl-3 h-full flex flex-col justify-center 
						md:items-start items-center"
				>
					<p className="truncate text-4xl font-medium text-neutral-100 py-2">
						{track.title}
					</p>
					<p className="truncate text-lg text-neutral-400">
						{track.author}
					</p>
				</div>
			</div>
			<div className="w-30 md:w-16 py-16 md:py-0">
				<PlayButton
					relayTrackesId={[track.id]}
					track={track}
					type="track"
				/>
			</div>
		</div>
	)
}
