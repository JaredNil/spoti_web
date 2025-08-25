'use client'

import { useEffect, useState } from 'react'

import { Title } from '@/shared/ui/pageTitle/pageTitle'

const HomeHeader = ({ hydrateUsername }: { hydrateUsername: string }) => {
	const [username, setUsername] = useState(hydrateUsername)

	useEffect(() => {
		// req of change username from server data
		// Заглушка
		// setUsername(getUserByCookie)
	})

	return <Title title={`Welcome back, ${username}`} />
}

export default HomeHeader
