'use client'
import { toast } from 'sonner'

import { useAlbumActions } from '@/entities/album'

export const LibraryCreation: React.FC = () => {
	const { createAlbum, isUpdating } = useAlbumActions()

	const onCreatingAlbum = () => {
		if (!isUpdating) createAlbum()
		else {
			toast.warning('Подождите создания')
		}
	}

	return (
		<div
			className="flex hover:bg-primary transition-all"
			onClick={onCreatingAlbum}
		>
			<div
				className="flex justify-center items-center
				aspect-square h-[34px] bg-secondary"
			>
				<div
					className="text-common  text-3xl 
					ml-[1px] mb-[6px] pointer-events-none select-none"
				>
					+
				</div>
			</div>
			<div className="flex justify-start items-center pl-2 w-full overflow-hidden">
				<div
					className="select-none text-common text-ellipsis text-sm
					whitespace-nowrap tracking-wide w-full overflow-hidden"
				>
					{isUpdating ? 'Создание...' : 'Создать плейлист'}
				</div>
			</div>
		</div>
	)
}
