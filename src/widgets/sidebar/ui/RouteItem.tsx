import { twMerge } from 'tailwind-merge';
import { memo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/shared/icons';

interface RouteItem {
	routeInfo: {
		label: string;
		href: string;
	};
}

export const RouteItem: React.FC<RouteItem> = memo(({routeInfo}: RouteItem) => {

	const {href, label} = routeInfo;

	const pathname = usePathname();

	const isActive = (routeInfo.href === pathname);

	return (
		<Link
			href={href}
			className={twMerge(
				`transition, flex h-auto w-full cursor-pointer flex-row
				items-center gap-x-4 py-1  font-medium text-neutral-400
				hover:text-white`,
				isActive && 'text-white'
			)}
		>
			<Icons label={label}/>
			<p className="w-100 truncate">{label}</p>
		</Link>
	);
});
