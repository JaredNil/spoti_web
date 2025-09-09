import { FC } from 'react'

import SearchPage from './page'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Search' })

const SearchLayout: FC = () => {
	return (
		<>
			<Title title="Search page" />
			<SearchPage />
		</>
	)
}

export default SearchLayout
