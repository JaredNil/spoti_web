import { AuthWrapper } from '@/features/auth/ui/authWrapper'
import { RegisterForm } from '@/features/auth/ui/registerForm'
import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Create account' })

export default function RegisterPage() {
	return (
		<AuthWrapper
			heading="Регистрация"
			description="Чтобы войти на сайт введите ваш email и пароль"
			backButtonLabel="Уже есть аккаунт? Войти"
			backButtonHref="/auth/login"
		>
			<RegisterForm />
		</AuthWrapper>
	)
}
