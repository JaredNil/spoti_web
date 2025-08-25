import { FC } from 'react'

import SearchClient from './page'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Search' })

const SearchLayout: FC = () => {
	return (
		<>
			<Title title="Search page" />
			<SearchClient />
		</>
	)
}

export default SearchLayout
