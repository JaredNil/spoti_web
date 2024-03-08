import { useLocation } from 'react-router-dom';

import { Box } from 'shared/ui/Box/Box';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { TbFileUpload } from 'react-icons/tb';

import { SidebarItem } from './SidebarItem';

const routes = [
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

const Sidebar: React.FC = () => {
	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<div
			className=" hidden h-full w-[300px]
			flex-col gap-y-2 bg-black p-2
			md:flex"
		>
			<Box>
				<div className="flex flex-col gap-y-4 px-5 py-4">
					{routes.map((item) => (
						<SidebarItem
							key={item.label}
							icon={item.icon}
							label={item.label}
							isActive={item.isActive(pathname)}
							href={item.href}
						/>
					))}
				</div>
			</Box>
			<Box className="h-full overflow-y-auto">liba{/* <Library songs={songs} /> */}</Box>
		</div>
	);
};

export default Sidebar;
