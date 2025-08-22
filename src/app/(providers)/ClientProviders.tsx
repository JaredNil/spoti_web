'use client'

import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<StoreProvider>
			<PlayerProvider>{children}</PlayerProvider>
			<Toaster position="top-right" />
		</StoreProvider>
	)
}
