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
export const Pause = () => (
	<svg
		stroke="currentColor"
		fill="currentColor"
		strokeWidth="0"
		viewBox="0 0 320 512"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"></path>
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

export const HighVolume = () => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5zM447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z"></path>
			<path d="M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z"></path>
			<path d="M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z"></path>
		</svg>
	)
}

export const LowVolume = () => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M278.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L196.8 200H144c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4zM354.4 182.6c-4.6-4.7-12.1-4.8-16.8-.1-4.7 4.7-4.7 12.3-.1 17 14.7 15 22.8 35.1 22.8 56.6 0 21.4-8.1 41.5-22.8 56.6-4.6 4.7-4.6 12.3.1 17 2.3 2.3 5.3 3.5 8.3 3.5 3.1 0 6.1-1.2 8.5-3.6C373.5 310 384 284 384 256.2h-.2c0-28-10.3-54.1-29.4-73.6z"></path>
		</svg>
	)
}
export const MuteVolume = () => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M326.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L244.8 200H192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z"></path>
		</svg>
	)
}
