'use client'

import { Link } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { userAction } from '@/entities/user'
import { useAppDispatch } from '@/shared/hooks'

export const TrackViewListingSearch = ({ author }: { author: string }) => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const routingSearch = () => {
		dispatch(userAction.setSearched(author))
		router.push(`/search`)
	}

	return (
		<div onClick={routingSearch} className="table-data select-auto ">
			<span className=" px-2 py-1 cursor-pointer">{author}</span>
		</div>
	)
}
