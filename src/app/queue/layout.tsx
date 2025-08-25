import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Queue' })

export default function QueueLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Title title="Queue trackes" />
			{children}
		</>
	)
}
