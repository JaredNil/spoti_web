import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'

import { useUserActions } from '@/entities/user'
import { useFetchUserQuery } from '@/entities/user/api/userApi'
import { Icons } from '@/shared/icons'

export const TrackesListLike = ({
	trackHash,
	classname,
}: {
	trackHash: string
	classname?: string
}) => {
	const { data } = useSession()
	const email = data?.user?.email ?? ''
	const { data: userData } = useFetchUserQuery(email ?? skipToken)

	const isLiked = userData?.likedHash.includes(trackHash) ?? null

	const { likeTrack } = useUserActions()

	const onLikeTrack = (event: React.MouseEvent<HTMLElement>) => {
		likeTrack(trackHash, !isLiked)
	}

	return (
		<div
			className={`flex items-center justify-center
			cursor-pointer ${classname}`}
			onClick={onLikeTrack}
		>
			{isLiked === null && 'l'}
			{isLiked === true && <Icons name="Heart" />}
			{isLiked === false && <Icons name="HeartEmpty" />}
		</div>
	)
}
