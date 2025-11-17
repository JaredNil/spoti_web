'use client'
import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Queue' })

export default function QueueLayout({ children }: { children: ReactNode }) {
	const { t } = useTranslation()

	return (
		<>
			<Title title={t('queueTracks')} />
			{children}
		</>
	)
}
