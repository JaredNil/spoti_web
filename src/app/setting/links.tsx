'use client'
import Link from 'next/link'

import { useTranslation } from '@/shared/i18n'
import { Icons } from '@/shared/icons'

type PageItem = {
	route: string
	labelKey: string
	icon: Parameters<typeof Icons>[0]['name']
	captionKey: string
}

export const Links = ({ classname }: { classname?: string }) => {
	const { t } = useTranslation()

	const pages: PageItem[] = [
		{
			route: '/overview',
			labelKey: 'overview',
			icon: 'Overview',
			captionKey: 'statsInsights',
		},
		{
			route: '/account',
			labelKey: 'account',
			icon: 'Profile',
			captionKey: 'manageProfile',
		},
		{
			route: '/search',
			labelKey: 'search',
			icon: 'Search',
			captionKey: 'findAnything',
		},
		{
			route: '/queue',
			labelKey: 'queue',
			icon: 'Queue',
			captionKey: 'upNext',
		},
		{
			route: '/upload',
			labelKey: 'upload',
			icon: 'Upload',
			captionKey: 'addNewTracks',
		},
		{
			route: '/empty',
			labelKey: 'newPageSoon',
			icon: 'Dots',
			captionKey: 'idkWhatWillBe',
		},
	]

	return (
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
							<div className="text-sm font-semibold">
								{t(p.labelKey as any)}
							</div>
							<div className="text-[10px] text-neutral-600 dark:text-neutral-300">
								{t(p.captionKey as any)}
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
}
