'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { useState } from 'react'

import { TrackesContainer } from './trackesView/trackesContainer'
import { TrackesEdit } from './trackesView/trackesEdit'
import { TrackesHead } from './trackesView/trackesHead'

import { Album, useFetchAlbumQuery } from '@/entities/album'
import { useFetchTrackesQuery } from '@/entities/track'
import { Trackes } from '@/shared/api'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

interface TrackesViewProps {
	albumPreload?: Album
	trackesPreload?: Trackes
	albumHash: string
}

export const TrackesView: React.FC<TrackesViewProps> = ({
	albumPreload,
	trackesPreload,
	albumHash,
}) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	const { data: album, isLoading: isLoadingAlbum } =
		useFetchAlbumQuery(albumHash)
	const { data: trackes, isLoading: isLoadingTrackes } = useFetchTrackesQuery(
		album?.trackesHash || skipToken
	)
	// usePrefetchTrackes(trackes) // Больше не нужно, перефакторить

	return (
		<TrackesContainer>
			<TrackesHead
				trackesHash={album?.trackesHash}
				toggleList={toggleList}
				isCompact={isCompact}
			/>

			<TrackesList
				isCompact={isCompact}
				relayTrackesId={album?.trackesHash || albumPreload?.trackesHash}
				albumPageId={albumHash}
				trackes={trackes || trackesPreload}
				isLoadingTrackes={isLoadingTrackes || isLoadingAlbum}
			/>
			<TrackesEdit
				isCompact={isCompact}
				albumPageId={albumHash}
				classname="pb-[30px]"
			/>
		</TrackesContainer>
	)
}
