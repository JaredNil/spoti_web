import { ReactNode } from 'react'

import Account from './ui/account'

const AccountPage: React.FC = () => {
	return (
		<div className="mb-2 flex flex-col justify-start">
			<h1 className="text-3xl font-semibold text-white pb-4">
				Account page
			</h1>
			<Account />
		</div>
	)
}

export default AccountPage
