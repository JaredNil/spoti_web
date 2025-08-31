'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { CacheProvider } from './cacheProvider'
import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<StoreProvider>
				<CacheProvider>
					<PlayerProvider>{children}</PlayerProvider>
					<Toaster position="top-center" />
				</CacheProvider>
			</StoreProvider>
		</SessionProvider>
	)
}
