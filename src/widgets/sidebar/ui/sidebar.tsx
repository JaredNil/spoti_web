'use client'
import { Library } from './library/library'
import { RouteItem } from './routeItem'

import { useTranslation } from '@/shared/i18n'
import { IconName } from '@/shared/icons'

const sidebarRoutes: { href: string; icon: IconName; labelKey: string }[] = [
	{
		href: '/overview',
		icon: 'CV',
		labelKey: 'overview',
	},
	{
		href: '/home',
		icon: 'Home',
		labelKey: 'home',
	},
	{
		href: '/search',
		icon: 'Search',
		labelKey: 'search',
	},
	{
		href: '/upload',
		icon: 'Upload',
		labelKey: 'upload',
	},
	{
		href: '/queue',
		icon: 'Queue',
		labelKey: 'queue',
	},
]

export function Sidebar() {
	const { t } = useTranslation()

	return (
		<aside
			className="sidebar relative hidden h-full min-w-[250px] max-w-[500px]
			gap-y-2 pl-2 pr-1 w-auto
			md:flex"
		>
			<div className="sidebar_container flex flex-col relative w-full">
				<div className="flex flex-col gap-y-4 px-5 py-4 bg-section rounded-lg w-full">
					{sidebarRoutes.map((item, key) => (
						<RouteItem
							routeInfo={{
								href: item.href,
								label: t(item.labelKey),
								icon: item.icon,
							}}
							key={key}
						/>
					))}
				</div>
				<div className="h-full overflow-y-auto mt-2 bg-section rounded-lg w-full">
					<div className="px-5 pt-4 text-common select-none font-semibold">
						{t('playlists')}
					</div>
					<Library />
				</div>
				{/* <SidebarResizer /> */}
			</div>
		</aside>
	)
}
