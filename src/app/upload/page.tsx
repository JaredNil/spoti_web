'use client'

import { FC } from 'react'
import { useState } from 'react'

import { useUploadTrack } from './model/hooks/useUploadTrack'
import { DragArea } from './ui/dragArea'
import { UploadManager } from './ui/uploadManager'
import { UploadView } from './ui/uploadView'

const UploadPage: FC = () => {
	const isUploading = false
	const [isDragging, setIsDragging] = useState(false)
	const { uploadTrack, tracks, setTracks, updateTrack } = useUploadTrack()

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
