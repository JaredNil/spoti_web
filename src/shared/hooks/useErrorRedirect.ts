import { useRouter } from 'next/navigation'

const DELAY_TRANSITION = 2000

export const useErrorRedirect = () => {
	const router = useRouter()
	const onRedirect = (delay: number = DELAY_TRANSITION) => {
		setTimeout(() => {
			router.push('/home')
		}, delay)
	}

	return { onRedirect }
}
