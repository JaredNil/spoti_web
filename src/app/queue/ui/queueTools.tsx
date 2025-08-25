import { HiMiniArrowsUpDown } from 'react-icons/hi2'
import { ImShuffle } from 'react-icons/im'
import { WiMoonAltWaningGibbous3 } from 'react-icons/wi'
import { toast } from 'sonner'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { shuffle } from '@/shared/lib/shuffle'
import {
	getPlayerQueue,
	getPlayerTarget,
	playerAction,
	usePlayer,
} from '@/widgets/player'

export const QueueTools = () => {
	const dispatch = useAppDispatch()
	const player = usePlayer()

	const queue = useAppSelector(getPlayerQueue)
	const target = useAppSelector(getPlayerTarget)

	const tools = () => [
		{
			icon: <WiMoonAltWaningGibbous3 />,
			label: 'zapas',
			handle: () => {
				toast.success('Пока не придумал функциональность.', {})
			},
		},
		{
			icon: <HiMiniArrowsUpDown />,
			label: 'reverse',
			handle: () => {
				toast.success('Очередь развёрнута.', {})
				const newQueue = [...queue].reverse()
				dispatch(playerAction.setQueue(newQueue))
				player.start(newQueue, target)
			},
		},
		{
			icon: <ImShuffle />,
			label: 'shuffle',
			handle: () => {
				toast.success('Очередь расшуршана.', {})
				const newQueue = shuffle(queue)
				dispatch(playerAction.setQueue(newQueue))
				player.start(newQueue, target)
			},
		},
	]

	return (
		<div
			className="w-full h-24 px-14 bg-neutral-100/10 rounded-lg
			flex items-center justify-around gap-x-6 "
		>
			{tools().map((tool) => (
				<div
					onClick={() => tool.handle()}
					key={tool.label}
					className="flex flex-col items-center justify-end
					bg-neutral-400/30 px-4 pt-2 pb-1 rounded-lg 
					cursor-pointer"
				>
					<div
						className="h-[28px] w-[28px] pointer-events-none
						*:w-full *:h-full *:fill-neutral-300"
					>
						{tool.icon}
					</div>
					<div className="select-none text-sm tracking-tighter pt-1">
						{tool.label}
					</div>
				</div>
			))}
		</div>
	)
}
