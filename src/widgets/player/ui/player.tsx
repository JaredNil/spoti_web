'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { PlayerPlay } from './piece/playerPlay'
import { PlayerLine } from './playerLine'
import { Volume } from './volume'
import { useKeyActivator } from '../model/hook/useKeyActivator'
import { getIsRunPlayer, getTrack } from '../model/selector/playerSelector'

import { useCurrentTrack } from '@/app/(providers)/playerProvider'
import { useAppSelector } from '@/shared/hooks'

export const Player: React.FC = () => {
	const router = useRouter()
	useKeyActivator()

	const isRun = useAppSelector(getIsRunPlayer)

	const track = useAppSelector(getTrack)

	const { toggleTrack, pauseTrack } = useCurrentTrack()

	useEffect(() => {
		if (track) toggleTrack(track?.songLink as string)
	}, [track, toggleTrack])

	useEffect(() => {
		if (!isRun && pauseTrack) pauseTrack()
	}, [isRun, pauseTrack])

	return (
		<div
			className="relative z-50 min-h-14 w-full px-2
			flex flex-col
			bg-black sm:px-4"
		>
			<div className="sm:hidden h-14 px-5">
				<PlayerLine />
			</div>
			<div className="flex justify-between items-center h-full">
				<div className="flex justify-start items-center w-[315px]">
					<div className="aspect-square w-[40px] bg-white hidden cursor-pointer sm:block">
						{track?.imageLink && (
							<Image
								src={'/content/cover/album-placeholder.webp'}
								alt="LOGOTYPE"
								width={100}
								height={100}
								className="w-full h-full"
							/>
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
							<span className="cursor-pointer">
								{track?.title}
							</span>
						</div>
						<span
							className="text-[9px] w-[130px] text-ellipsis
						text-neutral-300 whitespace-nowrap overflow-hidden select-none
						sm:w-[165px] sm:text-[11px]"
							title={track?.author}
						>
							<span className="cursor-pointer">
								{track?.author}
							</span>
						</span>
					</div>
				</div>
				<PlayerPlay />
				<div className="flex-1 pr-3 hidden sm:block">
					<PlayerLine />
				</div>
				<Volume />
			</div>
		</div>
	)
}
