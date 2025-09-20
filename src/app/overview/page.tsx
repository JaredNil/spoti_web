import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { Info } from './ui/info'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'
import Three from '@/widgets/three/three'

export const metadata = createMeta({ title: 'Overview' })

export default function OverviewPage() {
	return (
		<>
			<Title title="Overview" />
			<Three />
			<Info />
		</>
	)
}
