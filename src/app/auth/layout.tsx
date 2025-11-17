'use client'
import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Auth' })

export default function PlaylistPageLayout({
	children,
}: {
	children: ReactNode
}) {
	const { t } = useTranslation()

	return (
		<>
			<Title title={t('authenticationAccount')} />
			<div
				className="flex flex-col justify-center items-center
				w-full mb-10"
			>
				{children}
			</div>
		</>
	)
}
