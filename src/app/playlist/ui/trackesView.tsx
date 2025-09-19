'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { useState } from 'react'

import { TrackesContainer } from './trackesView/trackesContainer'
import { TrackesEdit } from './trackesView/trackesEdit'
import { TrackesHead } from './trackesView/trackesHead'

import { AlbumInterface, useFetchAlbumQuery } from '@/entities/album'
import { useFetchTrackesQuery } from '@/entities/track'
import { Trackes } from '@/shared/api'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

interface TrackesViewProps {
	albumPreload?: AlbumInterface
	trackesPreload?: Trackes
	albumId: string
}

export const TrackesView: React.FC<TrackesViewProps> = ({
	albumPreload,
	trackesPreload,
	albumId,
}) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const toggleList = () => setIsList((prev) => !prev)

	const { data: album, isLoading: isLoadingAlbum } =
		useFetchAlbumQuery(albumId)
	const { data: trackes, isLoading: isLoadingTrackes } = useFetchTrackesQuery(
		album?.trackesId || skipToken
	)
	return (
		<TrackesContainer>
			<TrackesHead
				trackesId={album?.trackesId}
				toggleList={toggleList}
				isCompact={isCompact}
			/>

			<TrackesList
				isCompact={isCompact}
				relayTrackesId={album?.trackesId || albumPreload?.trackesId}
				albumPageId={albumId}
				trackes={trackes || trackesPreload}
				isLoadingTrackes={isLoadingTrackes || isLoadingAlbum}
			/>
			<TrackesEdit
				isCompact={isCompact}
				albumPageId={albumId}
				classname="pb-[30px]"
			/>
		</TrackesContainer>
	)
}
