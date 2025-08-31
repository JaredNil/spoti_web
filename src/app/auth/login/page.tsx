import { LoginForm } from '@/features/auth/ui/loginForm'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Auth' })

export default function LoginPage() {
	return <LoginForm />
}
