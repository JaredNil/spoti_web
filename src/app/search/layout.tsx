'use client'
import { FC } from 'react'

import SearchPage from './page'

import { createMeta } from '@/shared/const/metadata'
import { useTranslation } from '@/shared/i18n'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

// export const metadata = createMeta({ title: 'Search' })

const SearchLayout: FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<Title title={t('searchPage')} />
			<SearchPage />
		</>
	)
}

export default SearchLayout
