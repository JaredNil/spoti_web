import { Library } from './library'
import { RouteItem } from './routeItem'

import { SidebarResizer } from '@/shared/ui/sidebarResizer'

const sidebarRoutes = [
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
			className="sidebar hidden h-full min-w-[250px] max-w-[500px] relative
			flex-col gap-y-2 pl-2 pr-1
			md:flex"
		>
			<div className="flex flex-col gap-y-4 px-5 py-4 bg-neutral-900 rounded-lg">
				{sidebarRoutes.map((item, key) => (
					<RouteItem routeInfo={item} key={key} />
				))}
			</div>
			<div className="h-full overflow-y-auto bg-neutral-900 rounded-lg">
				<div className="px-5 pt-4 text-neutral-400 select-none font-semibold">
					ПЛЕЙЛИСТЫ
				</div>
				<Library />
			</div>
			<SidebarResizer />
		</aside>
	)
}
