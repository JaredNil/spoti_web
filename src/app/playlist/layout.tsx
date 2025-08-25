import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Album' })

export default async function PlaylistPageLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<div className="flex w-full flex-col">
			{children}
			{/* DEPRECATED */}
			{/* {isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />} */}
		</div>
	)
}
