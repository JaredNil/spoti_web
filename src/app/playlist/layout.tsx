import { ReactNode } from 'react'

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
