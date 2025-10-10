'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'sonner'

import { getIsVisibleModal } from '@/entities/meta'
import { useCreateUserIfNotExists } from '@/entities/user/hooks/useCreateUserIfNotExists'
import { AuthModal } from '@/features/authModal'
import { useAppSelector } from '@/shared/hooks'
import { Icons } from '@/shared/icons'
import { Button } from '@/shared/ui/kit/button'

export const HeaderAuthButton = () => {
	const isVisibleModal = useAppSelector(getIsVisibleModal)
	const routing = useRouter()

	const { status, data: session } = useSession()
	const email = session?.user?.email

	// хук который проверяет есть ли у данного вхождения в приложение метаданные аккаунта
	// если нет, то создает
	const { isCreating } = useCreateUserIfNotExists({
		email: email ?? '',
		firstname: (session?.user?.name?.split(' ')[0] ?? '').trim(),
		lastname: (session?.user?.name?.split(' ')[1] ?? '').trim(),
	})
	const profileClick = () => {
		if (status === 'unauthenticated') {
			toast.warning('Войдите в ваш аккаунт')
			routing.push('/auth/login')
		} else if (status === 'authenticated') {
			routing.push('/setting')
		}
	}

	const authClick = () => {
		if (status === 'unauthenticated') {
			routing.push('/auth/login')
		} else if (status === 'authenticated') {
			signOut({ redirect: true, redirectTo: '/auth/login' })
		}
	}

	return (
		<div
			className="relative flex items-center justify-between 
			transition-all duration-300"
		>
			<Button
				onClick={profileClick}
				className="transition-all aspect-square duration-150 
				bg-white cursor-pointer rounded-full"
				disabled={status === 'loading' || isCreating}
			>
				<Icons
					name="Setting"
					size={12}
					classname="[&>svg]:fill-black"
				/>
			</Button>
			<Button
				onClick={authClick}
				disabled={status === 'loading' || isCreating}
				className="ml-3 flex w-24 items-center justify-center px-6 py-2
				bg-white cursor-pointer rounded-full text-black"
			>
				{status === 'authenticated' ? 'Выйти' : 'Войти'}
			</Button>
			{isVisibleModal && <AuthModal type="auth" />}
		</div>
	)
}
