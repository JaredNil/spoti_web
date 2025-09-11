import { FC, ReactNode } from 'react'

export const TrackesContainer: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div
			className="flex w-full flex-col
			bg-[#121212]
			my-4 px-2 sm:px-6 py-4"
		>
			{children}
		</div>
	)
}
