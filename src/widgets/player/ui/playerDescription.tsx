import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { Track } from '@/shared/api'

interface pdProps {
	track: Track | null
	classname: string
}

export const PlayerDescription: FC<pdProps> = ({ track, classname }) => {
	const router = useRouter()

	return (
		<div className={`flex justify-start items-center ${classname}`}>
			<div className="aspect-square w-[40px] bg-white hidden cursor-pointer sm:block">
				{track?.imageLink ? (
					<Image
						src={'/content/cover/album-placeholder.webp'}
						alt="LOGOTYPE"
						width={50}
						height={50}
						className="w-full h-full"
					/>
				) : (
					<div className=" h-full aspect-square bg-neutral-400 animate-pulse" />
				)}
			</div>
			<div
				className="flex flex-col justify-around pl-3"
				onClick={() => router.push('/queue')}
			>
				<div
					className="text-[11px] text-ellipsis w-[130px] 
					whitespace-nowrap overflow-hidden select-none
					sm:w-[165px] sm:text-[14px]"
					title={track?.title}
				>
					<span className="cursor-pointer">{track?.title}</span>
				</div>
				<span
					className="text-[9px] w-[130px] text-ellipsis
					text-neutral-300 whitespace-nowrap overflow-hidden select-none
					sm:w-[165px] sm:text-[11px]"
					title={track?.author}
				>
					<span className="cursor-pointer">{track?.author}</span>
				</span>
			</div>
		</div>
	)
}
