'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { FC } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { toast } from 'sonner'

const dropdownOptions = [
	{
		name: 'Удалить трек',
		callback: () => {},
	},
	{
		name: 'Добавить в плейлист',
		callback: () => {
			toast.success('Фича еще не реализована')
		},
	},
]

export const DropdownTrack: FC = () => {
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
					className="py-1 bg-neutral-700 rounded-xl"
				>
					{dropdownOptions.map((op, i) => (
						<DropdownMenuItem
							key={i}
							onClick={op.callback}
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
