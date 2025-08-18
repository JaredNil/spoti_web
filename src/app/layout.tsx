'use client'
import localFont from 'next/font/local'
import { Suspense } from 'react'
import { twMerge } from 'tailwind-merge'

import { GeneralProviders } from './(providers)'

import Page from '@/shared/ui/page'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import '@/shared/css/index.css'

const SegoeUI = localFont({ src: '../shared/font/SegoeSemibold.woff2' })

// export const metadata: Metadata = {
//     title: 'Jarefy',
//     description:
//         'Jarefy - это музыкальный сервис, который позволяет слушать музыку словно в Spotify, а также слушать музыку, которая была добавлена в избранное.',
//     keywords: ['Jarefy', 'Музыка', 'Spotify', 'Искусство'],
// }

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body>
                <div
                    className={`fixed top-0 left-0 right-0 bottom-0 w-dvw h-vh 
            bg-black scheme-dark text-white
            font-main font-bold ${SegoeUI.className}`}
                >
                    <Suspense fallback="">
                        <GeneralProviders>
                            <div
                                className={twMerge(
                                    'flex overflow-x-auto h-full'
                                    // (isActivePlayer) ? 'h-full pb-12': 'h-full'
                                )}
                            >
                                <Sidebar />
                                <main className="relative flex h-full w-full overflow-y-auto mx-1 py-2">
                                    <Header />
                                    <Page>{children}</Page>
                                </main>
                            </div>
                            {/* {isActivePlayer && <Player />}	 */}
                        </GeneralProviders>
                    </Suspense>
                </div>
            </body>
        </html>
    )
}
