'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { useState } from 'react'

import { TrackesContainer } from './trackesView/trackesContainer'
import { TrackesEdit } from './trackesView/trackesEdit'
import { TrackesHead } from './trackesView/trackesHead'

import { AlbumInterface, useFetchAlbumQuery } from '@/entities/album'
import { useFetchAllTrackesQuery, useFetchTrackesQuery } from '@/entities/track'
import { Trackes } from '@/shared/api'
import { extractIds } from '@/shared/lib/extractIds'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

export const TrackesViewAll: React.FC = () => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	const { data: trackes, isLoading: isLoadingTrackes } =
		useFetchAllTrackesQuery()
	let trackesId
	if (trackes) trackesId = extractIds(trackes)

	return (
		<TrackesContainer>
			<TrackesHead
				trackesId={trackesId}
				toggleList={toggleList}
				isCompact={isCompact}
			/>

			<TrackesList
				isCompact={isCompact}
				relayTrackesId={trackesId}
				albumPageId={'0'}
				trackes={trackes}
				isLoadingTrackes={isLoadingTrackes}
				type="all"
			/>
		</TrackesContainer>
	)
}
