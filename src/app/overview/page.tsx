import { Info } from './ui/info'
import { IntroOverview } from './ui/intro'
// import { Portfolio } from './ui/portfolio'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Резюме' })

export default function OverviewPage() {
	return (
		<>
			<Title title="Overview" />
			{/* <Portfolio /> */}
			<IntroOverview />
			<Info />
		</>
	)
}
