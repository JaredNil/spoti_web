'use client'

import { useState } from 'react'

import { TrackesContainer } from './trackesView/trackesContainer'
import { TrackesHead } from './trackesView/trackesHead'

import { useFetchAllTrackesQuery } from '@/entities/track'
import { extractIds } from '@/shared/lib/extractIds'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

export const TrackesViewAll: React.FC = () => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	const { data: trackes, isLoading: isLoadingTrackes } =
		useFetchAllTrackesQuery()
	let trackesHash
	if (trackes) trackesHash = extractIds(trackes)

	return (
		<TrackesContainer>
			<TrackesHead
				trackesHash={trackesHash}
				toggleList={toggleList}
				isCompact={isCompact}
			/>

			<TrackesList
				isCompact={isCompact}
				relayTrackesId={trackesHash}
				albumPageId={'0'}
				trackes={trackes}
				isLoadingTrackes={isLoadingTrackes}
				type="all"
			/>
		</TrackesContainer>
	)
}
