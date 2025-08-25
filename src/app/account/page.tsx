import Account from './ui/account'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Account' })

const AccountPage: React.FC = () => {
	return (
		<div className="mb-2 flex flex-col justify-start">
			<Title title="Account page" />
			<Account />
		</div>
	)
}

export default AccountPage
