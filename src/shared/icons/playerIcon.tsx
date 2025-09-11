export const Play = () => (
	<svg
		stroke="currentColor"
		fill="rgb(200 200 200)"
		strokeWidth="0"
		viewBox="0 0 448 512"
		className="pointer-events-none"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
	</svg>
)

export const Left = () => (
	<div className="relative flex justify-center items-center">
		<Play />
		<svg
			className="absolute right-[-6px] scale-[1.4] scale-x-[1.6]"
			fill="#C8C8C8"
			stroke="#C8C8C8"
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
export const Right = () => (
	<div className="relative flex justify-center items-center">
		<Play />
		<svg
			className="absolute right-[-6px] scale-[1.4] scale-x-[1.6]"
			fill="#C8C8C8"
			stroke="#C8C8C8"
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
