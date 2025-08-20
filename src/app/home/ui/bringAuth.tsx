'use client'

import { FC, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BringAuthModal } from './bringAuthModal'

export const BringAuth: FC = () => {
	const [username, setUsername] = useState(undefined)

	useEffect(() => {
		// req of change username from server data
		// Заглушка
		// setUsername(getUserByCookie)
	})

	return (
		username && (
			<>
				<span
					className={twMerge(
						`mt-5 inline-block
			h-full select-none rounded-lg 
			pr-4 text-2xl `
					)}
				>
					<span>Пользовательские плейлисты</span>
				</span>

				<span
					className={`mb-4 mt-4 
					flex h-full select-none 
					justify-center rounded-lg pr-4 text-xl font-light`}
				>
					<span>Войдите для создания плейлистов.</span>
				</span>

				<BringAuthModal />
			</>
		)
	)
}
