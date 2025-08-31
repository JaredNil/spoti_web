'use client'

import { useRouter } from 'next/navigation'
import { FaGoogle, FaYandex } from 'react-icons/fa'

import { Button } from '@/shared/ui/kit/button'

// import { authService } from '../services'

export function AuthSocial() {
	const router = useRouter()

	// const { mutateAsync } = useMutation({
	// 	mutationKey: ['oauth by provider'],
	// 	mutationFn: async (provider: 'google' | 'yandex') =>
	// 		await authService.oauthByProvider(provider),
	// })

	const onClick = async (provider: 'google' | 'yandex') => {
		// const response = await mutateAsync(provider)
		// if (response) {
		// 	router.push(response.url)
		// }
	}

	return (
		<>
			<div className="grid grid-cols-2 gap-6">
				<Button
					onClick={() => onClick('google')}
					variant="outline"
					className="cursor-pointer border-emerald-500"
				>
					<FaGoogle className="size-4" />
					Google
				</Button>
				<Button
					onClick={() => onClick('yandex')}
					variant="outline"
					className="cursor-pointer border-emerald-500"
				>
					<FaYandex className="size-4" />
					Яндекс
				</Button>
			</div>
			<div className="relative my-2">
				<div className="relative flex justify-center text-xs uppercase">
					<span className="px-2 text-muted-foreground">Или</span>
				</div>
			</div>
		</>
	)
}
