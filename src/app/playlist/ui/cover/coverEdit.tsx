'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { albumFormSchema, AlbumFormValues } from '../../model/schemas'

import {
	Album,
	useAlbumActions,
	useUpdateAlbumMutation,
} from '@/entities/album'
import { Button } from '@/shared/ui/kit/button'
import { Input } from '@/shared/ui/kit/input'
import { Label } from '@/shared/ui/kit/label'

interface Props {
	album: Album
	initial: {
		title: string
		description?: string
		imagePath?: string
	}
	onClose: () => void
}

export const CoverEdit: React.FC<Props> = ({ album, initial, onClose }) => {
	const [updateAlbum, { isLoading }] = useUpdateAlbumMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AlbumFormValues>({
		resolver: zodResolver(albumFormSchema),
		defaultValues: initial,
	})

	const { deleteAlbum } = useAlbumActions()

	const onSubmit = async (values: AlbumFormValues) => {
		try {
			await updateAlbum({ ...album, ...values }).unwrap()
			toast.success('Плейлист обновлён')
			onClose()
		} catch {
			toast.error('Ошибка при сохранении')
		}
	}

	const onDelete = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		deleteAlbum(album.hash)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mt-2 p-4 border border-green-500 rounded"
			>
				<div className="w-full flex justify-between mb-3">
					<span className="text-2xl text-neutral-400 font-bold">
						EDIT ALBUM
					</span>
					<Button type="button" variant={'danger'} onClick={onDelete}>
						Delete playlist
					</Button>
				</div>
				<Label className="block mb-4">
					<span className="text-green-500">Name playlist</span>
					<Input
						className="my-1"
						{...register('title')}
						placeholder="Название плейлиста"
					/>
					{errors.title && (
						<p className="text-red-600 text-sm">
							{errors.title.message}
						</p>
					)}
				</Label>

				<Label className="block mb-4">
					<span className="text-green-500">Описание</span>
					<Input
						{...register('description')}
						className="my-1"
						placeholder="Описание (необязательно)"
					/>
				</Label>

				<Label className="block mb-4 pointer-events-none">
					<span className="text-green-500">
						URL обложки (не работает пока)
					</span>
					<Input
						type="file"
						// {...register('imagePath')}
						className=" w-[60%] input my-1"
					/>
					{/* {errors.imagePath && (
					<p className="text-red-600 text-sm">
						{errors.imagePath.message}
					</p>
				)} */}
				</Label>

				<div className="flex gap-2 w-full">
					<Button
						className="mx-6 w-auto flex-1/2"
						variant={'danger'}
						onClick={onClose}
					>
						Cancel
					</Button>
					<Button
						className="mx-3 w-auto flex-1/2"
						variant={'submit'}
						disabled={isLoading}
					>
						{isLoading ? 'Saving...' : 'Save'}
					</Button>
				</div>
			</form>
		</>
	)
}
