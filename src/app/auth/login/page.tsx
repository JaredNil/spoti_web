'use client'
import { AuthWrapper } from '@/features/auth/ui/authWrapper'
import { LoginForm } from '@/features/auth/ui/loginForm'
import { useTranslation } from '@/shared/i18n'

export default function LoginPage() {
	const { t } = useTranslation()

	return (
		<AuthWrapper
			heading={t('login')}
			description={t('loginDescription')}
			backButtonLabel={t('noAccountYet')}
			backButtonHref="/auth/register"
		>
			<LoginForm />
		</AuthWrapper>
	)
}
