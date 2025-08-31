import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { getAuthUsername } from '../model/selector/authSelector'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ValidateBlockProps {}

export const ValidateBlock: React.FC<ValidateBlockProps> = (
	props: ValidateBlockProps
) => {
	const dispatch = useAppDispatch()

	const [minLogin, setMinLogin] = useState<boolean>(false)

	const username = useAppSelector(getAuthUsername)

	useEffect(() => {
		let commonValid = true
		if (username.match(/^.{6,}$/)) {
			commonValid = false
			setMinLogin(false)
		} else setMinLogin(true)

		// dispatch(authAction.setVaild(commonValid))
	}, [username, dispatch])

	return (
		<div className="flex w-full flex-wrap transition-opacity">
			<span
				className={twMerge(
					` m-2 h-[1px] overflow-hidden
                    rounded-xl bg-red-500 px-3 py-[2px]
                    opacity-0
                    transition-opacity`,
					minLogin && 'h-auto opacity-100'
				)}
			>
				Минимальная длина логина 6 символов.
			</span>
		</div>
	)
}
