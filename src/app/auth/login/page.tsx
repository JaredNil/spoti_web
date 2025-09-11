import { AuthWrapper } from '@/features/auth/ui/authWrapper'
import { LoginForm } from '@/features/auth/ui/loginForm'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Auth' })

export default function LoginPage() {
	return (
		<AuthWrapper
			heading="Войти"
			description="Чтобы войти на сайт введите ваш email и пароль"
			backButtonLabel="Еще нет аккаунта? Регистрация"
			backButtonHref="/auth/register"
		>
			<LoginForm />
		</AuthWrapper>
	)
}
