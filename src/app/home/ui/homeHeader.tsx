'use client'

import { useSession } from 'next-auth/react'

const HomeHeader = () => {
	// const [isLoading, setIsLoading] = useState(true)

	const { data, status } = useSession()

	return (
		<div
			className="flex font-semibold text-white 
			select-none pointer-events-none pb-2
			text-xl lg:text-3xl"
		>
			<h1 className="mr-3">{`Welcome back,`}</h1>
			{status === 'loading' && (
				<div className="h-8 w-40 bg-neutral-200 animate-pulse"></div>
			)}
			{status === 'authenticated' && data.user?.name}
			{status === 'unauthenticated' && 'user'}
		</div>
	)
}

export default HomeHeader
