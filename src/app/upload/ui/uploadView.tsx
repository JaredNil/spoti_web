import { Dispatch } from '@reduxjs/toolkit'
import { FormEvent, SetStateAction } from 'react'

import { UploadViewControllers } from './uploadView/uploadViewControllers'
import { UploadViewProperty } from './uploadView/uploadViewProperty'
import { UploadViewStatus } from './uploadView/uploadViewStatus'
import { UploadViewTitle } from './uploadView/uploadViewTitle'
import { TrackForm, TrackMeta } from '../model/types'

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
	const removeTrack = (id: string) => {
		setTracks((prev) => prev.filter((t) => t.id !== id))
	}

	if (tracks.length === 0) {
		return (
			<div className={`text-center ${classname}`}>
				<h3 className="text-xl font-medium text-gray-400">
					Нет файлов для загрузки
				</h3>
				<p className="text-gray-300 mt-2">
					Перетащите аудиофайлы в область выше
				</p>
			</div>
		)
	} else {
		return (
			<div className={`text-xl font-semibold text-white ${classname}`}>
				<div className="">Uploading trackes:</div>
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
