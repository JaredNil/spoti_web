import Link from 'next/link'

import { createMeta } from '@/shared/const/metadata'
import { Icons } from '@/shared/icons'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Setting' })

type PageItem = {
	route: string
	label: string
	icon: Parameters<typeof Icons>[0]['name']
	caption: string
}
const pages: PageItem[] = [
	{
		route: '/overview',
		label: 'Overview',
		icon: 'Overview',
		caption: 'Stats & insights',
	},
	{
		route: '/account',
		label: 'Account',
		icon: 'Profile',
		caption: 'Manage profile',
	},
	{
		route: '/search',
		label: 'Search',
		icon: 'Search',
		caption: 'Find anything',
	},
	{ route: '/queue', label: 'Queue', icon: 'Queue', caption: 'Up next' },
	{
		route: '/upload',
		label: 'Upload',
		icon: 'Upload',
		caption: 'Add new tracks',
	},
	{
		route: '/empty',
		label: 'NEW PAGE IN SOON',
		icon: 'Dots',
		caption: 'idk что будет',
	},
]

export const Links = async ({ classname }: { classname?: string }) => (
	<div className={`flex flex-wrap ${classname}`}>
		{pages.map((p) => (
			<Link
				key={p.route}
				href={p.route}
				className="block w-full sm:w-1/2 py-2 px-10 sm:p-2"
			>
				<div
					className="flex items-center gap-4 p-4
					bg-neutral-700/50 hover:bg-neutral-600/60
					transition "
				>
					<Icons
						name={p.icon}
						size={20}
						classname="[&>svg]:fill-black dark:[&>svg]:fill-white"
					/>

					<div className="flex-1">
						<div className="text-sm font-semibold">{p.label}</div>
						<div className="text-[10px] text-neutral-600 dark:text-neutral-300">
							{p.caption}
						</div>
					</div>

					<Icons
						name="RightArrow"
						size={16}
						classname="[&>svg]:fill-neutral-500"
					/>
				</div>
			</Link>
		))}
	</div>
)
