'use client'
import Account from './ui/account'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Account' })

const AccountPage: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className="mb-2 flex flex-col justify-start">
			<Title title={t('accountPage')} />
			<Account />
		</div>
	)
}

export default AccountPage
