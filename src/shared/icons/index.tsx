import { createElement, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import {
	Home,
	Overview,
	Queue,
	Search,
	Upload,
	LeftArrow,
	RightArrow,
	Setting,
	CV,
} from './headerIcon'
import {
	HighVolume,
	Left,
	LowVolume,
	MuteVolume,
	Pause,
	Play,
	Right,
} from './playerIcon'
import {
	Dots,
	Heart,
	HeartEmpty,
	ListBullets,
	ListLight,
	Moon,
	Profile,
	Rectangle,
	Reverse,
	Shuffle,
} from './utilsIcon'

const iconsStorage = {
	Home,
	Overview,
	Search,
	Upload,
	Queue,
	Left,
	Right,
	Play,
	Pause,
	HighVolume,
	LowVolume,
	MuteVolume,
	Dots,
	Moon,
	Reverse,
	Shuffle,
	ListBullets,
	CV,
	ListLight,
	Heart,
	HeartEmpty,
	LeftArrow,
	RightArrow,
	Profile,
	Rectangle,
	Setting,
} as const

export type IconName = keyof typeof iconsStorage

type Props = {
	name: IconName
	size?: number
	classname?: string
}

export const Icons = ({ name, size, classname }: Props): ReactElement => (
	<div
		className={twMerge(
			'relative flex items-center justify-center [&>svg]:w-full [&>svg]:h-full',
			classname
		)}
		style={{
			width: size,
			height: size,
		}}
	>
		{createElement(iconsStorage[name])}
	</div>
)
