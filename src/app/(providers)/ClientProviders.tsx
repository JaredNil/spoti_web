'use client'

import { ReactNode } from 'react'

import { StoreProvider } from './storeProvider/ui/storeProvider'

export default function ClientProviders({ children }: { children: ReactNode }) {
    return <StoreProvider>{children}</StoreProvider>
}
