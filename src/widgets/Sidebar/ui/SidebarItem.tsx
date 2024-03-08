import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
	return (
		<Link
			to={href}
			className={twMerge(
				`
        text-md 
        flex 
        h-auto 
        w-full 
        cursor-pointer 
        flex-row 
        items-center 
        gap-x-4
        py-1
        font-medium
        text-neutral-400
        transition
        hover:text-white`,
				active && 'text-white'
			)}
		>
			<Icon size={26} />
			<p className="w-100 truncate">{label}</p>
		</Link>
	);
};

export default SidebarItem;
