'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { FC } from 'react'
import { toast } from 'sonner'

import { useAlbumActions } from '@/entities/album'
import { Track } from '@/shared/api'
import { Icons } from '@/shared/icons'

export interface DropdownTrackProps {
	albumPageId: string
	track: Track
}

export const DropdownTrack: FC<DropdownTrackProps> = ({
	albumPageId,
	track,
}: DropdownTrackProps) => {
	const { deleteTrack } = useAlbumActions()

	const dropdownOptions = [
		{
			name: 'Удалить трек',
			callback: () => deleteTrack(track, albumPageId),
		},
		{
			name: 'Добавить в плейлист',
			callback: () => toast.success('Фича еще не реализована'),
		},
	]

	return (
		<div
			className="flex h-full w-full items-center justify-center 
            	rounded-full drop-shadow-md
            	transition group-hover:opacity-100"
		>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Icons name="Dots" size={30} classname="text-white" />
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
