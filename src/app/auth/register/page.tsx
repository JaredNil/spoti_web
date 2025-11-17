'use client'
import { AuthWrapper } from '@/features/auth/ui/authWrapper'
import { RegisterForm } from '@/features/auth/ui/registerForm'
import { useTranslation } from '@/shared/i18n'

export default function RegisterPage() {
	const { t } = useTranslation()

	return (
		<AuthWrapper
			heading={t('register')}
			description={t('registerDescription')}
			backButtonLabel={t('alreadyHaveAccount')}
			backButtonHref="/auth/login"
		>
			<RegisterForm />
		</AuthWrapper>
	)
}
