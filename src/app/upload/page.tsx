'use client'

import { FC } from 'react'
import { useState } from 'react'

import { ReducerList } from '../(providers)/storeProvider'
import { TrackForm } from './model/types'
import { DragArea } from './ui/dragArea'
import { UploadManager } from './ui/uploadManager'
import { UploadView } from './ui/uploadView'

import { uploadReducer } from '@/app/upload'
import { useUploadAudioMutation } from '@/shared/api/rtkApi'

const reducers: ReducerList = {
	uploadpage: uploadReducer,
}

const UploadPage: FC = () => {
	const [tracks, setTracks] = useState<TrackForm[]>([])
	const [isDragging, setIsDragging] = useState(false)

	const [uploadAudio, { isLoading: isUploading }] = useUploadAudioMutation()

	const updateTrack = (id: string, updates: Partial<TrackForm>) => {
		setTracks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
		)
	}

	const uploadTrack = async (id: string) => {
		const track = tracks.find((t) => t.id === id)
		if (!track) return

		const formData = new FormData()
		formData.append('file', track.file)
		formData.append('title', track.title)
		formData.append('author', track.author)

		updateTrack(id, { status: 'uploading' })

		try {
			await uploadAudio(formData).unwrap()
			updateTrack(id, { status: 'success' })
		} catch (error) {
			updateTrack(id, { status: 'error' })
		}
	}

	return (
		<>
			<UploadManager
				classname="mt-2"
				tracks={tracks}
				uploadTrack={uploadTrack}
				isUploading={isUploading}
			/>
			<DragArea
				classname="mt-6"
				setTracks={setTracks}
				isDragging={isDragging}
				setIsDragging={setIsDragging}
			/>
			<UploadView
				tracks={tracks}
				setTracks={setTracks}
				uploadTrack={uploadTrack}
				updateTrack={updateTrack}
				classname="my-4"
			/>
		</>
	)
}

export default UploadPage
