import { TrackForm } from '../model/types'

import { Button } from '@/shared/ui/kit/button'
import { useTranslation } from '@/shared/i18n'

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
	const { t } = useTranslation()

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
				<div className="text-neutral-400 text-xl">{t('manager')}</div>
				<div className="w-full px-12 flex gap-x-4 text-xs lg:text-sm flex-wrap">
					<div className="flex flex-col justify-around ">
						<span className="truncate flex-1 ">
							{t('totalFiles')}: {tracks.length}
						</span>
						<span className="truncate flex-1">
							{t('uploaded')}:{' '}
							{
								tracks.filter((t) => t.status === 'success')
									.length
							}
						</span>
						<span className="">
							{t('errors')}:{' '}
							{tracks.filter((t) => t.status === 'error').length}
						</span>
					</div>
					<div className="flex flex-col justify-around">
						<span className="truncate flex-1">
							{t('readyToUpload')}:{' '}
							{tracks.filter((t) => t.status === 'idle').length}
						</span>
						<span className="truncate flex-1">
							{t('duplicates')}:{' '}
							{tracks.filter((t) => t.status === 'idle').length}
						</span>
						<span className="truncate flex-1 text-transparent">
							empty
						</span>
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
				<span className="select-none">{t('uploadAll')}</span>
			</Button>
		</div>
	)
}
