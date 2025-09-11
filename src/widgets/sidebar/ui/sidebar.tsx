import { Library } from './library/library'
import { RouteItem } from './routeItem'

import { IconName } from '@/shared/icons'
import { SidebarResizer } from '@/shared/ui/sidebarResizer'

const sidebarRoutes: { href: string; label: IconName }[] = [
	{
		href: '/home',
		label: 'Home',
	},
	{
		href: '/search',
		label: 'Search',
	},
	{
		href: '/upload',
		label: 'Upload',
	},
	{
		href: '/queue',
		label: 'Queue',
	},
]

export function Sidebar() {
	return (
		<aside
			className="sidebar relative hidden h-full min-w-[250px] max-w-[500px]
			gap-y-2 pl-2 pr-1 w-auto
			md:flex"
		>
			<div className="sidebar_container flex flex-col relative w-full">
				<div className="flex flex-col gap-y-4 px-5 py-4 bg-neutral-900 rounded-lg w-full">
					{sidebarRoutes.map((item, key) => (
						<RouteItem routeInfo={item} key={key} />
					))}
				</div>
				<div className="h-full overflow-y-auto mt-2 bg-neutral-900 rounded-lg w-full">
					<div className="px-5 pt-4 text-neutral-400 select-none font-semibold">
						ПЛЕЙЛИСТЫ
					</div>
					<Library />
				</div>
				{/* <SidebarResizer /> */}
			</div>
		</aside>
	)
}
