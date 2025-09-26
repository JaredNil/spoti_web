'use client'

import { skipToken } from '@reduxjs/toolkit/query'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
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

	const {
		data: album,
		isLoading: isLoadingAlbum,
		error,
	} = useFetchAlbumQuery(albumHash)
	const { data: trackes, isLoading: isLoadingTrackes } = useFetchTrackesQuery(
		(album?.trackesHash?.length ?? 0) > 0
			? (album?.trackesHash ?? [])
			: skipToken
	)

	// usePrefetchTrackes(trackes) // Больше не нужно, перефакторить

	// При любой ошибке с сервера - не рисуем компонент, метаинфа в page.tsx
	if (error && (error as FetchBaseQueryError).status) {
		return
	}

	return (
		<TrackesContainer>
			<TrackesHead
				isCompact={isCompact}
				trackesHash={album?.trackesHash}
				toggleList={toggleList}
			/>

			<TrackesList
				isCompact={isCompact}
				albumPageId={albumHash}
				relayTrackesId={album?.trackesHash || albumPreload?.trackesHash}
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
