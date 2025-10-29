'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { IconName, Icons } from '@/shared/icons'

interface RouteItem {
	routeInfo: {
		label: IconName
		href: string
	}
}

export const RouteItem: React.FC<RouteItem> = memo(
	({ routeInfo }: RouteItem) => {
		const { href, label } = routeInfo

		const pathname = usePathname()

		const isActive = routeInfo.href === pathname

		return (
			<Link
				href={href}
				className={twMerge(
					`transition flex h-auto w-full cursor-pointer flex-row
					items-center gap-x-4 py-1  font-medium text-common
					hover:opacity-45`,
					isActive && 'opacity-45'
				)}
			>
				<Icons name={label} size={26} />
				<p className="truncate">{label}</p>
			</Link>
		)
	}
)
