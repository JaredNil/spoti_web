'use client'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

import { useCreateAlbumMutation } from '../api/albumApi'

import { AlbumInterface } from '@/shared/api'
import { shortHash } from '@/shared/lib/hash'

export const useCreateAlbum = () => {
	const { data: session } = useSession()

	const [createAlbumQuery, { isLoading: isCreating }] =
		useCreateAlbumMutation()

	const createAlbum = () => {
		const hash = shortHash()
		const newAlbum: AlbumInterface = {
			author: session?.user?.name || 'Spotify user #2392',
			id: hash,
			user_id: session?.user?.id || '1',
			title: `${hash} album`,
			trackesId: [],
			creationDate: new Date().toDateString(),
			description: 'New album description',
			imagePath: '',
		}
		createAlbumQuery(newAlbum).then(() => toast.success('Album created'))
	}

	return {
		createAlbum,
	}
}
