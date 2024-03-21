import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import { memo } from 'react';
// import { useUser } from 'app/providers/UserProvider/lib/useUser';

interface SidebarItemProps {
	icon: IconType;
	label: string;
	isActive: boolean;
	href: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ icon: Icon, label, isActive, href }: SidebarItemProps) => {
	// const { toggleInit } = useUser();

	return (
		<Link
			to={href}
			onClick={() => {
				// toggleInit(false);
			}}
			className={twMerge(
				`transition, flex h-auto w-full cursor-pointer flex-row
				items-center gap-x-4 py-1  font-medium text-neutral-400
				hover:text-white`,
				isActive && 'text-white'
			)}
		>
			<Icon size={26} />
			<p className="w-100 truncate">{label}</p>
		</Link>
	);
});
