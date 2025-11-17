'use client'
import { ReactNode, useEffect, useState } from 'react'

interface I18nProviderProps {
	children: ReactNode
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
		// Динамически импортируем i18n только на клиенте
		import('@/shared/i18n')
	}, [])

	if (!isClient) {
		return <>{children}</>
	}

	return <>{children}</>
}
