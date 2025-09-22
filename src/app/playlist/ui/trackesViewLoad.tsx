'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { TrackesContainer } from './trackesView/trackesContainer'
import { TrackesEdit } from './trackesView/trackesEdit'
import { TrackesHead } from './trackesView/trackesHead'

import { useFetchTrackesQuery } from '@/entities/track'
import { useFetchUserQuery } from '@/entities/user/api/userApi'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

export const TrackesViewLoad = () => {
	const { data } = useSession()
	const email = data!.user!.email ?? ''
	const { data: userData, isLoading: isLoadingAlbum } = useFetchUserQuery(
		email ?? skipToken
	)

	const { data: trackes, isLoading: isLoadingTrackes } = useFetchTrackesQuery(
		(userData?.trackesHash?.length ?? 0) > 0
			? (userData?.trackesHash ?? [])
			: skipToken
	)

	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	return (
		<TrackesContainer>
			<TrackesHead
				trackesHash={userData?.trackesHash}
				toggleList={toggleList}
				isCompact={isCompact}
			/>

			<TrackesList
				isCompact={isCompact}
				relayTrackesId={userData?.trackesHash}
				albumPageId={'load'}
				trackes={trackes}
				type="all"
				isLoadingTrackes={isLoadingTrackes || isLoadingAlbum}
			/>
		</TrackesContainer>
	)
}
