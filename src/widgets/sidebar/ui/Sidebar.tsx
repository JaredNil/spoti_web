// import { Box } from 'shared/ui/Box/Box';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { TbFileUpload } from 'react-icons/tb';

import { RouteItem } from './RouteItem';
import { Library } from './Library';

const sidebarRoutes = [
	{
		icon: HiHome,
		label: 'Home',
		href: '/',
		isActive: (pathname: string) => pathname === '/',
	},
	{
		icon: BiSearch,
		label: 'Search',
		href: '/search',
		isActive: (pathname: string) => pathname === '/search',
	},
	{
		icon: TbFileUpload,
		label: 'Upload',
		href: '/upload',
		isActive: (pathname: string) => pathname === '/upload',
	},
];

export const Sidebar: React.FC = () => {
	

	return (
		<aside
			className=" hidden h-full min-w-[300px]
			flex-col gap-y-2 p-2 pr-1
			md:flex"
		>
			<div className="flex flex-col gap-y-4 px-5 py-4 bg-neutral-900 rounded-lg">
				{sidebarRoutes.map((item) => (
					<RouteItem
						key={item.label}
						icon={item.icon}
						label={item.label}
						// isActive={item.isActive(pathname)}
						href={item.href}
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
