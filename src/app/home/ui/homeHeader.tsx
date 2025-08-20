'use client'

import { useEffect, useState } from 'react'

const HomeHeader = ({ svUsername }: { svUsername: string }) => {
	const [username, setUsername] = useState(svUsername)

	useEffect(() => {
		// req of change username from server data
		// Заглушка
		// setUsername(getUserByCookie)
	})

	return (
		<h1 className="relative text-3xl font-semibold text-white select-none">
			{`Welcome back, ${username}`}
		</h1>
	)
}

export default HomeHeader
