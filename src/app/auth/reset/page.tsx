import { ResetPasswordForm } from '@/features/auth/ui/resetPasswordForm'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Reset password' })

export default function LoginPage() {
	return <ResetPasswordForm />
}
