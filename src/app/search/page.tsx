import { FC } from 'react'

import SearchClient from './ui/search'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Search' })

const SearchPage: FC = () => {
	return (
		<>
			<Title title="Search page" />
			<SearchClient />
		</>
	)
}

export default SearchPage
