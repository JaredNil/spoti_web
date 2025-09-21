import { Info } from './ui/info'
import { IntroOverview } from './ui/intro'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Overview' })

export default function OverviewPage() {
	return (
		<>
			<Title title="Overview" />
			<IntroOverview />
			<Info />
		</>
	)
}
