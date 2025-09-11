'use client'

import { useSession } from 'next-auth/react'

export const HomeTitle = () => {
	const { data, status } = useSession()

	return (
		<div
			className="flex font-semibold text-white
			flex-col sm:flex-row
			select-none pointer-events-none pb-2
			text-3xl"
		>
			<h1 className="mr-2">Welcome back,</h1>
			{status === 'loading' && (
				<div className="h-8 w-40 bg-neutral-200 animate-pulse"></div>
			)}
			{status === 'authenticated' && <span>{data.user?.name}</span>}
			{status === 'unauthenticated' && 'guest'}
		</div>
	)
}
