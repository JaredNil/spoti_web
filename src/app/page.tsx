import { permanentRedirect } from 'next/navigation'
import { FC } from 'react'

const StartPage: FC = () => {
	permanentRedirect('/overview')
}

export default StartPage
