'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

import {
	useCreateUserMutation,
	useFetchUserQuery,
} from '@/entities/user/api/userApi'
import { User } from '@/shared/api'
import { z, ze, zw } from '@/shared/lib/log'

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
		error,
		refetch,
		isSuccess: isSuccessLoadingUser,
		isFetching,
		isUninitialized,
		isLoading,
	} = useFetchUserQuery(email!, { skip: !email })

	const [createUser, { isLoading: isCreating }] = useCreateUserMutation()

	useEffect(() => {
		// Выход из функции,если данные
		// загружены успешно или еще начали запрос или он в процессе
		if (isSuccessLoadingUser || isUninitialized || isFetching || isLoading)
			return

		if (!email || email === '') {
			ze(`Для создание профиля в базе данных отсутствуют данные`)
			return
		}
		if (error === undefined) {
			z(`Ошибок при получении метаданных пользователя нет.`)
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
						trackesHash: [],
						likedHash: [],
						albumsHash: [],
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
	}, [email, error, createUser])

	return { isCreating }
}
