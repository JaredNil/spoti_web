'use client'

import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { CacheProvider } from './cacheProvider'
import ModalProvider from './modalProvider'
import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<StoreProvider>
			<CacheProvider>
				<ModalProvider>
					<PlayerProvider>{children}</PlayerProvider>
					<Toaster position="top-right" />
				</ModalProvider>
			</CacheProvider>
		</StoreProvider>
	)
}
