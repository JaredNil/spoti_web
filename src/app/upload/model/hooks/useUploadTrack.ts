import { PutObjectCommand } from '@aws-sdk/client-s3'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { toast } from 'sonner'

import { TrackForm } from '../types'

import { useCreateTrackMutation } from '@/entities/track/api/trackApi'
import { Track } from '@/shared/api'
import { s3 } from '@/shared/api/api'
import { fileToBuffer } from '@/shared/lib/fileToBuffer'
import { shortHash } from '@/shared/lib/hash'
import { z, ze, zw } from '@/shared/lib/log'

export const useUploadTrack = () => {
	const { data } = useSession()
	const [createTrack, { isLoading: isCreating }] = useCreateTrackMutation()

	const [tracks, setTracks] = useState<TrackForm[]>([])

	const updateTrack = (id: string, updates: Partial<TrackForm>) => {
		setTracks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
		)
	}

	const uploadTrack = async (id: string) => {
		const trackRaw = tracks.find((t) => t.id === id)
		if (!trackRaw) return

		updateTrack(id, { status: 'uploading' })

		const hash = shortHash()
		const newTrack: Track = {
			hash: hash,
			user: data!.user!.email ?? 'Empty email',
			author: trackRaw.author,
			title: trackRaw.title,
			songLink: `${hash}.mp3`,
		}
		const key = `${hash}.mp3`

		try {
			const s3Res = await s3.send(
				new PutObjectCommand({
					Bucket: process.env.NEXT_PUBLIC_VK_BUCKET!,
					Key: key,
					Body: await fileToBuffer(trackRaw.file),
					ContentType: 'audio/mpeg',
					ACL: 'public-read',
				})
			)
			z(`${s3Res.$metadata.httpStatusCode}`)
			const { data: metaTrackResponce } = await createTrack(newTrack)

			toast.success('Трек успешно загружен')
			updateTrack(id, { status: 'success' })
		} catch (error) {
			ze(`Ошибка при загрузке трека. ${error}`)
			updateTrack(id, { status: 'error' })
		}
	}
	return { uploadTrack, tracks, setTracks, updateTrack }
}
