'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import {
	useFetchUserQuery,
	useToggleLikedTrackMutation,
	useUpdateUserMutation,
} from '@/entities/user/api/userApi'
import { Track, TrackHash, User } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const useUserActions = () => {
	const { data } = useSession()
	const email = data?.user?.email

	const [updateUserMutation] = useUpdateUserMutation()

	const addUserAlbumsHash = async (hash: string, userData: User) => {
		if (!hash || hash === '') {
			ze('Переданный хэш альбома пуст')
			return
		}
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		const newUserData: User = {
			...userData,
			albumsHash: [...userData.albumsHash, hash],
		}
		await updateUserMutation(newUserData)
			.unwrap()
			.then(
				() => {}
				// toast.success('User data updated!')
			)
	}
	const deleteUserAlbumsHash = async (hash: string, userData: User) => {
		if (!hash || hash === '') {
			ze('Переданный хэш альбома пуст')
			return
		}
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		const newAlbumsHash = [...userData.albumsHash].filter((h) => h != hash)
		const newUserData: User = {
			...userData,
			albumsHash: [...newAlbumsHash],
		}
		await updateUserMutation(newUserData).unwrap()
	}

	const [toggle] = useToggleLikedTrackMutation()

	const likeTrack = (trackHash: TrackHash, like: boolean) => {
		if (!email) return
		toggle({ email, trackHash: trackHash, like })
	}

	return {
		addUserAlbumsHash,
		deleteUserAlbumsHash,
		likeTrack,
	}
}
