'use client'
import { Links } from './links'
import Switcher from './switcher'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Setting' })

export default function SettingPage() {
	const { t } = useTranslation()

	return (
		<>
			<Title title={t('setting')} />
			<div className="flex flex-col items-center gap-4">
				<Links classname="max-w-[600px]" />
				<Switcher classname="max-w-[600px]" />
			</div>
		</>
	)
}
