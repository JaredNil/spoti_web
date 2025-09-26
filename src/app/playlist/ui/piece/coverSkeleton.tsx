export const CoverSkeletonLabel = () => (
	<div
		className="animate-pulse h-[58px] mb-[6px]
		w-1/2 sm:w-full text-2xl sm:text-5xl
		bg-gray-400 text-transparent"
	></div>
)

export const CoverSkeletonDesc = () => (
	<div
		className="flex h-[40px] w-[70%] items-center
		"
	>
		<div
			className="animate-pulse bg-gray-400 text-transparent
			text-xl h-[32px] content-none w-full"
		/>
	</div>
)
export const CoverSkeletonCreation = () => (
	<div className="flex h-[20px] w-[40%] items-center">
		<div
			className="animate-pulse bg-gray-400 text-transparent
			text-xl h-[20px] content-none w-full"
		/>
	</div>
)
export const CoverSkeletonImage = () => (
	<div
		className="animate-pulse bg-gray-400
		w-[95%] aspect-square"
	/>
)
export const CoverSkeletonImageMobile = () => (
	<div
		className="animate-pulse bg-gray-400
		p-1 h-full select-none w-[100%]"
	/>
)
