import { Home, Pause, Search, Upload } from 'lucide-react'
import { createElement, ReactElement, ReactNode } from 'react'

import { Queue } from './headerIcon'
import { Left, Play, Right } from './playerIcon'

const iconsStorage = {
	Home,
	Search,
	Upload,
	Queue,
	Left,
	Right,
	Play,
} as const

export type IconName = keyof typeof iconsStorage

type Props = {
	name: IconName
}

export const Icons = ({ name }: Props): ReactElement => {
	return createElement(iconsStorage[name])
}
