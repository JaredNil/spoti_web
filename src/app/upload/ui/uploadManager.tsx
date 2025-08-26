import { TrackForm } from '../model/types'

import { Button } from '@/shared/ui/kit/button'

export const UploadManager = ({
	tracks,
	uploadTrack,
	isUploading,
	classname,
}: {
	tracks: TrackForm[]
	uploadTrack: (id: string) => Promise<void>
	isUploading: boolean
	classname: string
}) => {
	const uploadAll = async () => {
		const promises = tracks
			.filter((t) => t.status === 'idle')
			.map((t) => uploadTrack(t.id))

		await Promise.allSettled(promises)
	}

	return (
		<div
			className={`bg-neutral-400/20 rounded-lg shadow
			px-4 flex  flex-col lg:flex-row items-center py-4 gap-2
			${classname}`}
		>
			<div className="flex justify-around items-center text-sm select-none gap-x-4  w-full">
				<div className="text-neutral-400 text-xl">Manager</div>
				<div className="w-full px-12 flex gap-x-4 text-xs lg:text-sm flex-wrap">
					<div className="flex flex-col justify-around ">
						<span className="truncate flex-1 ">
							Всего файлов: {tracks.length}
						</span>
						<span className="truncate flex-1">
							{'Загружено: ' +
								tracks.filter((t) => t.status === 'success')
									.length}
						</span>
						<span className="">
							{'Ошибки: '}
							{tracks.filter((t) => t.status === 'error').length}
						</span>
					</div>
					<div className="flex flex-col justify-around">
						<span className="truncate flex-1">
							{`Готовы к загрузке: `}
							{tracks.filter((t) => t.status === 'idle').length}
						</span>
						<span className="truncate flex-1">
							{`Повторы: `}
							{tracks.filter((t) => t.status === 'idle').length}
						</span>
						<span className="truncate flex-1 text-transparent">{`empty`}</span>
					</div>
				</div>
			</div>

			<Button
				onClick={uploadAll}
				disabled={
					isUploading || tracks.every((t) => t.status !== 'idle')
				}
				className="px-16 py-2 bg-neutral-400 text-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<span className="select-none">Отправить всё</span>
			</Button>
		</div>
	)
}
