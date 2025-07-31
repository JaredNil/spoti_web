"use client";
// import { Box } from 'shared/ui/Box/Box';
import { Library } from './library';
import { RouteItem } from './routeItem';

const sidebarRoutes = [
	{
		href: '/',
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
];

export function Sidebar(){
	return (
		<aside
			className=" hidden h-full min-w-[300px]
			flex-col gap-y-2 p-2 pr-1
			md:flex"
		>
			<div className="flex flex-col gap-y-4 px-5 py-4 bg-neutral-900 rounded-lg">
				{sidebarRoutes.map((item, key) => (
					<RouteItem
						routeInfo={item} key={key}
					/>
				))}
			</div>
			<div className="h-full overflow-y-auto bg-neutral-900 rounded-lg">

				<div className='px-5 pt-4 text-neutral-400 select-none font-semibold'>ПЛЕЙЛИСТЫ</div>
				<Library />

			</div>
		</aside>
	);
};
