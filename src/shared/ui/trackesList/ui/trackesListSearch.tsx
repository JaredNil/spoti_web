'use client'

import { useRouter } from 'next/navigation'

import { userAction } from '@/entities/user'
import { useAppDispatch } from '@/shared/hooks'

export const TrackesListSearch = ({ author }: { author: string }) => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const routingSearch = () => {
		dispatch(userAction.setSearched(author))
		router.push(`/search`)
	}

	return (
		<div
			onClick={routingSearch}
			className="table-data select-auto h-full flex items-center"
		>
			<span className="py-1 pr-5 cursor-pointer leading-0">{author}</span>
		</div>
	)
}
