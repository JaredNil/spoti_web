'use client'

import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import ModalProvider from './modalProvider'
import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<StoreProvider>
			<ModalProvider>
				<PlayerProvider>{children}</PlayerProvider>
				<Toaster position="top-right" />
			</ModalProvider>
		</StoreProvider>
	)
}
