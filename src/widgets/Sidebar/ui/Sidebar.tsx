/* eslint-disable import/no-extraneous-dependencies */
import { Song } from 'index';
import { ReactNode, useMemo } from 'react';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import { Box } from 'shared/ui/Box/Box';
import SidebarItem from './SidebarItem';
import { Library } from './Library';

interface SidebarProps {
	className?: string;
	songs: Song[];
	children: ReactNode;
}

const usePlayer = () => ({
	// ids: [],
	activeId: 1,
	// setId: (id: string) => set({ activeId: id }),
	// setIds: (ids: string[]) => set({ ids }),
	// reset: () => set({ ids: [], activeId: undefined }),
});

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
	const { className, songs, children } = props;

	let pathname = '/';

	const player = usePlayer();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: 'Home',
				active: pathname !== '/search',
				href: '/',
			},
			{
				icon: BiSearch,
				label: 'Search',
				href: '/search',
				active: pathname === '/search',
			},
		],
		[pathname]
	);

	return (
		<div>
			<div
				className={twMerge(
					`
        flex 
        h-full
        `,
					player.activeId && 'h-[calc(100%-80px)]'
				)}
			>
				<div
					className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
				>
					<Box>
						<div className="flex flex-col gap-y-4 px-5 py-4">
							{routes.map((item) => (
								<SidebarItem key={item.label} {...item} />
							))}
						</div>
					</Box>
					<Box className="overflow-y-auto h-full">liba{/* <Library songs={songs} /> */}</Box>
				</div>
				<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
			</div>
			{children}
		</div>
	);
};

export default Sidebar;
