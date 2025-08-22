'use client'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const ClientProviders = dynamic(() => import('./clientProviders'), {
	ssr: false,
	loading: () => null,
})

export const GeneralProviders = ({ children }: { children: ReactNode }) => {
	return <ClientProviders>{children}</ClientProviders>
}
