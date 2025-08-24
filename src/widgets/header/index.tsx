'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import { TbFileUpload } from 'react-icons/tb'

import { HeaderAuthButton } from './headerAuth'

interface HeaderSetting {
	desktop: {
		href: string
		icon: IconType
	}[]
	arrow: {
		href: 'back' | 'forward'
		icon: IconType
	}[]
}

const headerSetting: HeaderSetting = {
	desktop: [
		{ href: '/home', icon: HiHome },
		{ href: '/search', icon: BiSearch },
		{ href: '/upload', icon: TbFileUpload },
	],
	arrow: [
		{ href: 'back', icon: HiOutlineChevronLeft },
		{ href: 'forward', icon: HiOutlineChevronRight },
	],
}

export const Header: FC = () => {
	const routing = useRouter()

	return (
		<div
			className="absolute left-0 top-0 z-50 flex h-fit
				w-full rounded-lg bg-gradient-to-b from-emerald-800 p-6 
				select-none pointer-events-none"
		>
			<div className="mb-4 flex w-full items-center justify-between pointer-events-none [&>*]:pointer-events-auto">
				<div className="hidden items-center gap-x-2 md:flex">
					{headerSetting.arrow.map((btn, key) => (
						<div
							key={key}
							onClick={() =>
								btn.href == 'forward'
									? routing.forward()
									: routing.back()
							}
							className=" flex h-[35px] w-[35px] 
							cursor-pointer items-center justify-center 
							rounded-full  bg-black 
							transition hover:opacity-75
                        	"
						>
							<btn.icon
								className={`${btn.href == 'forward' ? `ml-[3px]` : `mr-[3px]`} text-white`}
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
							<btn.icon className="text-black" size={20} />
						</div>
					))}
				</div>
				<HeaderAuthButton />
			</div>
		</div>
	)
}
