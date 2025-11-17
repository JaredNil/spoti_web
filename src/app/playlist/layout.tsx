import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Playlist' })

export default async function PlaylistPageLayout({
	children,
}: {
	children: ReactNode
}) {
	return <div className="relative flex w-full flex-col">{children}</div>
}
