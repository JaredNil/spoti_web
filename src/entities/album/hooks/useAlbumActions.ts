'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
	useCreateAlbumMutation,
	useDeleteAlbumMutation,
	useFetchAlbumsByUserQuery,
} from '../api/albumApi'

import { useUserActions } from '@/entities/user'
import { useFetchUserQuery } from '@/entities/user/api/userApi'
import { Album } from '@/shared/api'
import { shortHash } from '@/shared/lib/hash'
import { ze } from '@/shared/lib/log'

export const useAlbumActions = () => {
	const router = useRouter()

	const [isUpdating, setIsUpdating] = useState(false)

	const { addUserAlbumsHash, deleteUserAlbumsHash } = useUserActions()
	const { data: session } = useSession()
	const email = session?.user?.email
	const { refetch: refetchUserData } = useFetchUserQuery(email ?? skipToken)
	const { refetch: refetchAlbums } = useFetchAlbumsByUserQuery(
		email ?? skipToken,
		{
			skip: !email,
		}
	)

	const [createAlbumMutation] = useCreateAlbumMutation()
	const [deleteAlbumMutation] = useDeleteAlbumMutation()

	const actualizeUser = async () => {
		const { data } = await refetchUserData()
		console.log('actualizeUser')
		console.log(data?.albumsHash)
		if (!data) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		return data
	}

	const createAlbum = async () => {
		setIsUpdating(true)
		const userData = await actualizeUser()
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
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		await createAlbumMutation(newAlbum).unwrap()
		await addUserAlbumsHash(hash, userData)
		toast.success('Album created')
		refetchUserData()
		refetchAlbums()
		setIsUpdating(false)
	}

	const deleteAlbum = async (hash: string) => {
		setIsUpdating(true)
		const userData = await actualizeUser()
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		await deleteAlbumMutation(hash).unwrap()
		await deleteUserAlbumsHash(hash, userData)
		toast.success('Album delete')
		refetchUserData()
		refetchAlbums()
		setIsUpdating(false)
		router.push('/home')
	}

	return {
		createAlbum,
		deleteAlbum,
		isUpdating,
	}
}
