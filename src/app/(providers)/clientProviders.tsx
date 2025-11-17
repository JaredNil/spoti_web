'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { CacheProvider } from './cacheProvider'
import { I18nProvider } from './i18nProvider'
import { PlayerProvider } from './playerProvider'
import { StoreProvider } from './storeProvider'
import { LanguageProvider } from '@/features/language'
// import { ServiceWorkerProvider } from './swProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<StoreProvider>
				<CacheProvider>
					<LanguageProvider>
						<I18nProvider>
							{/* <ServiceWorkerProvider /> */}
							<PlayerProvider>{children}</PlayerProvider>
							<Toaster position="top-center" />
						</I18nProvider>
					</LanguageProvider>
				</CacheProvider>
			</StoreProvider>
		</SessionProvider>
	)
}
