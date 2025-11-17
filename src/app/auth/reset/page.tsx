import { ResetPasswordForm } from '@/features/auth/ui/resetPasswordForm'
import { createMeta } from '@/shared/const/metadata'

export const metadata = createMeta({ title: 'Reset Password' })

export default function LoginPage() {
	return <ResetPasswordForm />
}
