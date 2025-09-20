import { twMerge } from 'tailwind-merge'

export const Pause = ({ isRun }: { isRun: boolean }) => (
	<div className="absolute flex justify-between">
		<svg
			className={twMerge(
				`translate-x-[2.5px] scale-x-[3] transition-transform`,
				`${!isRun ? 'scale-y-0' : 'scale-y-[2.1]'}`
			)}
			fill="oklch(72.3% 0.219 149.579)"
			stroke="oklch(72.3% 0.219 149.579)"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12 4l0 16"></path>
		</svg>
		<svg
			className={twMerge(
				`translate-x-[-2px] scale-x-[3] transition-transform`,
				`${!isRun ? 'scale-y-0' : 'scale-y-[2.1]'}`
			)}
			fill="oklch(72.3% 0.219 149.579)"
			stroke="oklch(72.3% 0.219 149.579)"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12 4l0 16"></path>
		</svg>
	</div>
)
