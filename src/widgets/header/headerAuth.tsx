'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { getIsVisibleModal } from '@/entities/meta'
import {
	useCreateUserMutation,
	useFetchUserQuery,
} from '@/entities/user/api/userApi'
import { AuthModal } from '@/features/authModal'
import { User } from '@/shared/api'
import { useAppSelector } from '@/shared/hooks'
import { Icons } from '@/shared/icons'
import { ze, zw } from '@/shared/lib/log'
import { Button } from '@/shared/ui/kit/button'

export const HeaderAuthButton = () => {
	const isVisibleModal = useAppSelector(getIsVisibleModal)
	const routing = useRouter()

	const { status, data: session } = useSession()
	const email = session?.user?.email

	const profileClick = () => {
		if (status === 'unauthenticated') {
			toast.warning('Войдите в ваш аккаунт')
			routing.push('/auth/login')
		} else if (status === 'authenticated') {
			routing.push('/account')
		}
	}

	const authClick = () => {
		if (status === 'unauthenticated') {
			routing.push('/auth/login')
		} else if (status === 'authenticated') {
			signOut({ redirect: true, redirectTo: '/auth/login' })
		}
	}

	const {
		data: user,
		isLoading,
		error,
		refetch,
	} = useFetchUserQuery(email!, {
		skip: !email,
	})
	const [createUser, { isLoading: isCreating }] = useCreateUserMutation()

	useEffect(() => {
		if (!email || user || error === undefined) return // error === undefined → ещё не проверяли
		if ('status' in error && error.status === 404) {
			;(async () => {
				try {
					const newUser: User = {
						email,
						firstname:
							session.user?.name?.split(' ')[0].trim() ?? '',
						lastname:
							session.user?.name?.split(' ')[1].trim() ?? '',
						imageHash: '',
						phone: '',
						'2fa': false,
						trackesId: [],
						createdAt: new Date().toISOString(),
						password: '',
					}
					console.log(newUser)
					zw('создание пользователя')
					await createUser(newUser).unwrap()
					toast.success('Профиль успешно создан')
					refetch() // обновляем кэш
				} catch (e: any) {
					toast.error('Не удалось создать профиль')
					ze(`Не удалось создать профиль ${error}`)
				}
			})()
		}
	}, [email, user, error, createUser, refetch, session])

	return (
		<div
			className="relative flex items-center justify-between 
			transition-all duration-300"
		>
			<Button
				onClick={profileClick}
				className="transition-all aspect-square duration-150 
				bg-white cursor-pointer rounded-full"
				disabled={status === 'loading'}
			>
				<Icons
					name="Profile"
					size={12}
					classname="[&>svg]:fill-black"
				/>
			</Button>
			<Button
				onClick={authClick}
				disabled={status === 'loading'}
				className="ml-3 flex w-24 items-center justify-center px-6 py-2
				bg-white cursor-pointer rounded-full text-black"
			>
				{status === 'authenticated' ? 'Выйти' : 'Войти'}
			</Button>
			{isVisibleModal && <AuthModal type="auth" />}
		</div>
	)
}
