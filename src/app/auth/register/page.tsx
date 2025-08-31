import { RegisterForm } from '@/features/auth/ui/registerForm'
import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Create account' })

export default function RegisterPage() {
	return <RegisterForm />
}
