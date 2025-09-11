import { FaPlay } from 'react-icons/fa'

import { Pause } from './pause'
import { usePlayer } from '../../model/hook/usePlayer'
import { getIsRunPlayer } from '../../model/selector/playerSelector'

import { useAppSelector } from '@/shared/hooks'
import { Icons } from '@/shared/icons'

export const PlayerPlay = () => {
	const { next, play, pause, prev } = usePlayer()
	const isRun = useAppSelector(getIsRunPlayer)
	const playHandler = () => (isRun ? pause() : play())

	return (
		<div
			className="absolute left-1/2 -translate-x-1/2 top-[-1/2] sm:top-0 h-full
			flex justify-between items-center
			sm:left-[280px]"
		>
			<div
				className="w-4 h-5 ml-1 mr-1
				flex justify-center items-center
				cursor-pointer	rotate-180	max-[420px]:hidden"
				onClick={() => prev()}
			>
				<Icons name="Left" />
			</div>
			<div
				onClick={playHandler}
				className="h-10 w-10 flex justify-center items-center
				border-[1px] border-green-500 rounded-full border-opacity-70 cursor-pointer"
			>
				<FaPlay
					size={25}
					fill="#48bb78"
					className={`pointer-events-none translate-x-[2px] origin-[5px]
					transition-transform
					${!isRun ? '' : 'scale-x-[0.1]'}`}
				/>
				<Pause isRun={isRun} />
			</div>
			<div
				className="w-4 h-5 ml-1 mr-1
				flex justify-center items-center 
				cursor-pointer
				max-[420px]:hidden"
				onClick={() => next()}
			>
				<Icons name="Right" />
			</div>
		</div>
	)
}
