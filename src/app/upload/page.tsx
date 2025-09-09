'use client'

import { FC } from 'react'
import { useState } from 'react'

import { TrackForm } from './model/types'
import { DragArea } from './ui/dragArea'
import { UploadManager } from './ui/uploadManager'
import { UploadView } from './ui/uploadView'

import { useCreateTrackMutation } from '@/entities/track/api/trackApi'
import { Track } from '@/shared/api'
import { shortHash } from '@/shared/lib/hash'

const UploadPage: FC = () => {
	const [createTrack] = useCreateTrackMutation()

	const [tracks, setTracks] = useState<TrackForm[]>([])
	const [isDragging, setIsDragging] = useState(false)

	const updateTrack = (id: string, updates: Partial<TrackForm>) => {
		setTracks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
		)
	}
	const isUploading = false

	const uploadTrack = async (id: string) => {
		const trackRaw = tracks.find((t) => t.id === id)
		if (!trackRaw) return

		const hash = shortHash()
		const newTrack: Track = {
			id: hash,
			userId: '1',
			author: trackRaw.author,
			title: trackRaw.title,
			hash: hash,
			songLink: `${hash}.mp3`,
		}
		console.log(newTrack)

		updateTrack(id, { status: 'uploading' })

		try {
			const presignRes = await fetch('/api/presign', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					songLink: newTrack!.songLink,
				}),
			})
			if (!presignRes.ok) throw new Error('presign')
			const { uploadUrl, key, publicUrl } = (await presignRes.json()) as {
				uploadUrl: string
				key: string
				publicUrl: string
			}

			await createTrack(newTrack)

			const upRes = await fetch(uploadUrl, {
				method: 'PUT',
				body: trackRaw.file,
				headers: { 'Content-Type': 'audio/mpeg' },
			})
			if (!upRes.ok) throw new Error('s3 upload')

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
