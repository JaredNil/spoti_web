'use client'

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuCheckboxItemProps,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { FC, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import { Button } from '@/shared/ui/kit/button'

type Checked = DropdownMenuCheckboxItemProps['checked']

const dropdownOptions = [
	{
		name: 'Profile',
	},
	{
		name: 'Billing',
	},
	{
		name: 'Team',
	},
	{
		name: 'Subscription',
	},
]

export const Dropdown: FC = () => {
	return (
		<div
			className="flex h-[56px] w-[56px] items-center justify-center 
            	rounded-full drop-shadow-md
            	transition group-hover:opacity-100"
		>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<HiOutlineDotsHorizontal
						size={32}
						className="text-neutral-400"
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					side="right"
					align="start"
					className="py-1 bg-neutral-900 rounded-xl"
				>
					<DropdownMenuLabel className="text-center text-neutral-400 select-none">
						Настройки
					</DropdownMenuLabel>
					{dropdownOptions.map((op, i) => (
						<DropdownMenuItem
							key={i}
							className="text-neutral-200 text-center cursor-pointer leading-7 px-4
							transition-colors
							hover:bg-neutral-400
							hover:text-neutral-900"
						>
							{op.name}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
