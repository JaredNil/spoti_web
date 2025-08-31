'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'sonner'

import { getIsVisibleModal } from '@/entities/user/model/selectors/getIsVisibleModal'
import { AuthModal } from '@/features/authModal'
import { useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui/kit/button'

export const HeaderAuthButton = () => {
	const isVisibleModal = useAppSelector(getIsVisibleModal)
	const routing = useRouter()

	const { status } = useSession()

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
			signOut({ redirect: false })
		}
	}

	return (
		<div className="relative flex items-center justify-between transition-all duration-300">
			<Button
				onClick={profileClick}
				className="transition-all duration-150 bg-white cursor-pointer rounded-full"
				disabled={status === 'loading'}
			>
				<FaUserAlt fill="#000000" />
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
