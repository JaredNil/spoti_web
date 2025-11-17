'use client'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export function TrackPageTitle() {
	const { t } = useTranslation()
	return <Title title={t('trackPage')} />
}
