import { FormEvent, SetStateAction } from 'react'

import { UploadViewControllers } from './uploadView/uploadViewControllers'
import { UploadViewProperty } from './uploadView/uploadViewProperty'
import { UploadViewStatus } from './uploadView/uploadViewStatus'
import { UploadViewTitle } from './uploadView/uploadViewTitle'
import { TrackForm } from '../model/types'
import { useTranslation } from '@/shared/i18n'

export const UploadView = ({
	tracks,
	setTracks,
	uploadTrack,
	updateTrack,
	classname,
}: {
	tracks: TrackForm[]
	setTracks: (value: SetStateAction<TrackForm[]>) => void
	uploadTrack: (id: string) => Promise<void>
	updateTrack: (id: string, updates: Partial<TrackForm>) => void
	classname?: string
}) => {
	const { t } = useTranslation()

	const removeTrack = (id: string) => {
		setTracks((prev) => prev.filter((t) => t.id !== id))
	}

	if (tracks.length === 0) {
		return (
			<div className={`text-center ${classname}`}>
				<h3 className="text-xl font-medium select-none">
					{t('notUploadingData')}
				</h3>
			</div>
		)
	} else {
		return (
			<div className={`text-xl font-semibold text-white ${classname}`}>
				<div className="">{t('uploadingTracks')}</div>
				{tracks.map((track, index) => (
					<form
						key={track.id}
						onSubmit={(e: FormEvent) => {
							e.preventDefault()
							uploadTrack(track.id)
						}}
						className="relative bg-neutral-400/20 text-base rounded-lg shadow-lg py-4 mt-2 mb-6 px-4"
					>
						<UploadViewTitle track={track} index={index} />
						<UploadViewProperty
							track={track}
							updateTrack={updateTrack}
						/>
						<UploadViewStatus track={track} />
						<UploadViewControllers
							removeTrack={removeTrack}
							track={track}
						/>
					</form>
				))}
			</div>
		)
	}
}
