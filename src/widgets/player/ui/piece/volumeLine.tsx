import { forwardRef } from 'react'

import { PLAYER_VOLUME_WIDTH } from '../player'

interface VolumeLineProps {
	volumeWidth: number
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
	onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const VolumeLine = forwardRef<HTMLDivElement, VolumeLineProps>(
	({ volumeWidth, handleClick, onMouseDown }, ref) => {
		return (
			<div
				ref={ref}
				className={`ml-2 w-[${PLAYER_VOLUME_WIDTH}px] min-w-[${PLAYER_VOLUME_WIDTH}px] 
				h-[3px] bg-neutral-400/40 
				relative cursor-pointer group 
				border-t-[10px] border-b-[10px] 
				box-content border-black`}
				onClick={handleClick}
				onMouseDown={onMouseDown}
			>
				<div
					style={{ width: `${volumeWidth}px` }}
					className="h-full left-0 top-0 bg-neutral-400 relative"
				>
					<div
						className="w-2 h-2 bg-neutral-400
					absolute translate-x-[-3px] top-[50%] translate-y-[-50%]
					aspect-square border rounded-xl border-neutral-600
					opacity-0 transition-opacity duration-100
					group-hover:opacity-100
				"
						style={{ left: volumeWidth }}
					></div>
				</div>
			</div>
		)
	}
)
