import { permanentRedirect } from 'next/navigation'
import { FC } from 'react'

const StartPage: FC = () => {
	permanentRedirect('/home')
}

export default StartPage
