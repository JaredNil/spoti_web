import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Auth' })

export default async function PlaylistPageLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<>
			<Title title="Authentication account" />
			<div
				className="flex flex-col justify-center items-center
				w-full mb-10"
			>
				{children}
			</div>
		</>
	)
}
