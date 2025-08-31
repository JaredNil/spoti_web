import { permanentRedirect } from 'next/navigation'
import { FC } from 'react'

const AuthPage: FC = () => {
	permanentRedirect('/auth/login')
}

export default AuthPage
