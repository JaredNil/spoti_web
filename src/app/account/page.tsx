'use client'
import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'

import { getIsLoadingPage, accountpageReducer } from '@/components/accountpage'
import { useAppSelector } from '@/shared/hooks'

const reducers: ReducerList = {
	account: accountpageReducer,
}

const AccountPage: React.FC = () => {
	// const { t } = useTranslation();

	const isLoadingPage = useAppSelector(getIsLoadingPage)

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className="mb-2 flex flex-col gap-y-6">
				<h1 className="text-3xl font-semibold text-white">
					Account page
				</h1>
			</div>
		</DynamicModuleLoader>
	)
}

export default AccountPage
