import { Links } from './links'
import Switcher from './switcher'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Setting' })

export default async function SettingPage() {
	return (
		<>
			<Title title={'Setting'} />
			<div className="flex flex-col items-center ">
				<Links classname="max-w-[600px]" />
				<Switcher classname="max-w-[600px]" />
			</div>
		</>
	)
}
