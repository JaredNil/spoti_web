'use client'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

import { useCreateAlbumMutation } from '../api/albumApi'

import { Album } from '@/shared/api'
import { shortHash } from '@/shared/lib/hash'

export const useCreateAlbum = () => {
	const { data: session } = useSession()

	const [createAlbumQuery] = useCreateAlbumMutation()

	const createAlbum = () => {
		const hash = shortHash()
		const newAlbum: Album = {
			author: session?.user?.name || 'Unknowing album',
			hash: hash,
			title: `${hash} album`,
			trackesHash: [],
			creationDate: new Date().toDateString(),
			description: 'Unknowing album description',
			imagePath: '',
		}
		createAlbumQuery(newAlbum).then(() => toast.success('Album created'))
	}

	return {
		createAlbum,
	}
}
