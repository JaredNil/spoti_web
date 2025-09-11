'use client'

import { useRouter } from 'next/navigation'

import { userAction } from '@/entities/user'
import { useAppDispatch } from '@/shared/hooks'

export const TrackesListSearch = ({
	author,
	classname,
}: {
	author: string
	classname?: string
}) => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const routingSearch = () => {
		dispatch(userAction.setSearched(author))
		router.push(`/search`)
	}

	return (
		<div
			onClick={routingSearch}
			className={`h-full flex overflow-hidden items-center ${classname}`}
		>
			<div className="cursor-pointer text-start truncate ">{author}</div>
		</div>
	)
}
