'use client'

import { ReactNode } from 'react'

import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<StoreProvider>
			<PlayerProvider>{children}</PlayerProvider>
		</StoreProvider>
	)
}
