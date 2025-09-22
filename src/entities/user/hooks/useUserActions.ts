'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import {
	useFetchUserQuery,
	useUpdateUserMutation,
} from '@/entities/user/api/userApi'
import { User } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const useUserActions = () => {
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

	return {
		addUserAlbumsHash,
		deleteUserAlbumsHash,
	}
}
