'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { HeaderAuthButton } from './headerAuth'

import { IconName, Icons } from '@/shared/icons'

interface HeaderSetting {
	desktop: {
		href: string
		icon: IconName
	}[]
	arrow: {
		href: 'back' | 'forward'
		icon: IconName
	}[]
}

const headerSetting: HeaderSetting = {
	desktop: [
		{ href: '/home', icon: 'Home' },
		{ href: '/search', icon: 'Search' },
		{ href: '/upload', icon: 'Upload' },
	],
	arrow: [
		{ href: 'back', icon: 'LeftArrow' },
		{ href: 'forward', icon: 'RightArrow' },
	],
}

export const Header: FC = () => {
	const routing = useRouter()

	return (
		<div
			className="absolute left-0 top-0 z-50 flex h-fit
			w-full rounded-lg bg-header-gradient p-6 
			select-none pointer-events-none"
			style={{ background: `var(--color-header-gradient)` }}
		>
			<div
				className="mb-4 flex w-full items-center justify-between 
				pointer-events-none [&>*]:pointer-events-auto"
			>
				<div className="hidden items-center gap-x-2 md:flex">
					{headerSetting.arrow.map((btn, key) => (
						<div
							key={key}
							onClick={() =>
								btn.href == 'forward'
									? routing.forward()
									: routing.back()
							}
							className=" flex h-[35px] w-[35px] bg-white
							cursor-pointer items-center justify-center 
							rounded-full  transition hover:opacity-75"
						>
							<Icons
								name={btn.icon}
								classname={`${btn.href == 'forward' ? `ml-[2px]` : `mr-[2px]`} text-[#09271e]`}
								size={23}
							/>
						</div>
					))}
				</div>
				<div className="flex items-center gap-x-2 md:hidden">
					{headerSetting.desktop.map((btn, key) => (
						<div
							key={key}
							onClick={() => routing.push(btn.href)}
							className="flex cursor-pointer items-center justify-center 
							rounded-full bg-white p-2 transition 
							hover:opacity-75"
						>
							<Icons
								name={btn.icon}
								size={20}
								classname="text-black"
							/>
						</div>
					))}
				</div>
				<div className="flex items-center gap-2">
					<HeaderAuthButton />
				</div>
			</div>
		</div>
	)
}
