'use client'

import { useRouter } from 'next/navigation'
import { FaUserAlt } from 'react-icons/fa'

import { getUsername } from '@/entities/user'
import { useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui/kit/button'

export const HeaderAuthButton = () => {
	const username = useAppSelector(getUsername)
	const routing = useRouter()

	return (
		<div className="relative flex items-center justify-between transition-all duration-300">
			<Button
				onClick={() => routing.push('/account')}
				className="transition-all duration-150 bg-white cursor-pointer rounded-full"
			>
				<FaUserAlt fill="#000000" />
			</Button>
			<Button
				className="ml-3 flex w-24 items-center justify-center px-6 py-2
				bg-white cursor-pointer rounded-full text-black"
			>
				{username ? 'Выйти' : 'Войти'}
			</Button>
		</div>
	)
}
