'use client'
import { Info } from './ui/info'
import { IntroOverview } from './ui/intro'
import { Portfolio } from './ui/portfolio'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Резюме' })

export default function OverviewPage() {
	const { t } = useTranslation()

	return (
		<>
			<Title title={t('overview')} />
			<Portfolio />
			{/* <IntroOverview /> */}
			{/* <Info /> */}
		</>
	)
}
