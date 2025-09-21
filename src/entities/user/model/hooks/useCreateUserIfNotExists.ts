'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

import {
	useCreateUserMutation,
	useFetchUserQuery,
} from '@/entities/user/api/userApi'
import { User } from '@/shared/api'
import { ze, zw } from '@/shared/lib/log'

type Params = {
	email?: string
	firstname?: string
	lastname?: string
}

export function useCreateUserIfNotExists({
	email,
	firstname = '',
	lastname = '',
}: Params) {
	const {
		data: user,
		error,
		refetch,
	} = useFetchUserQuery(email!, { skip: !email })

	const [createUser, { isLoading: isCreating }] = useCreateUserMutation()

	useEffect(() => {
		if (!email || user || error === undefined) {
			ze(`Для создание профиля в базе данных отсутствуют данные`)
			return
		}

		if ('status' in error && error.status === 404) {
			;(async () => {
				try {
					const newUser: User = {
						email,
						firstname,
						lastname,
						imageHash: '',
						phone: '',
						'2fa': false,
						trackesId: [],
						albumsId: [],
						createdAt: new Date().toISOString(),
						password: '',
					}

					zw('Создание пользователя')
					await createUser(newUser).unwrap()
					toast.success('Профиль успешно создан')
					refetch()
				} catch (e: any) {
					toast.error('Не удалось создать профиль')
					ze(`Не удалось создать профиль ${e}`)
				}
			})()
		}
	}, [email, user, error, createUser, refetch, firstname, lastname])

	return { isCreating }
}
