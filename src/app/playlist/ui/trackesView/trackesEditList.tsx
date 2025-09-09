import React from 'react'
import { toast } from 'sonner'

import {
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} from '@/entities/album'
import { AlbumInterface, Track, Trackes, TrackesId } from '@/shared/api'
import { Button } from '@/shared/ui/kit/button'
import { TrackesListItem } from '@/shared/ui/trackesList/ui/trackesListItem'
import { TrackesListLabel } from '@/shared/ui/trackesList/ui/trackesListLabel'
import { TrackesListSkeleton } from '@/shared/ui/trackesList/ui/trackesListSkeleton'

interface TrackViewListingProps {
	relayTrackesId: TrackesId
	isCompact: boolean
	isLoadingEditTrackes: boolean
	trackes: Trackes
	classname: string
	albumPageId?: string
}

export const TrackesEditList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingEditTrackes,
	trackes,
	classname,
	albumPageId = undefined,
}: TrackViewListingProps) => {
	const [updateAlbum, { isLoading: isUpdating }] = useUpdateAlbumMutation()
	const [fetchAlbum] = useLazyFetchAlbumQuery()

	const onAddTrack = (track: Track) => {
		if (!albumPageId) return
		fetchAlbum(albumPageId).then((r) => {
			const origin = r.data as AlbumInterface
			const newAlbum = Object.assign({}, origin)
			newAlbum.trackesId = [...origin.trackesId, track.id]
			updateAlbum(newAlbum).then(() => {
				toast.success('Track added')
			})
		})
	}

	if (isLoadingEditTrackes)
		return <TrackesListSkeleton isCompact={isCompact} />

	if (!trackes || trackes.length === 0)
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	else
		return (
			<div className={`playlist__wrapper ${classname}`}>
				<TrackesListLabel isCompact />
				{trackes?.map((track, i) => (
					<TrackesListItem
						index={i}
						key={track.id + i.toString()}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
						customButton={
							<div
								className="flex cursor-pointer 
								items-center justify-center"
							>
								<Button
									disabled={isUpdating}
									onClick={() => onAddTrack(track)}
									className="py-1 px-2 text-sm
										 text-neutral-700 bg-green-500 rounded-lg
										hover:bg-green-600/70 transition-colors
										"
								>
									Add
								</Button>
							</div>
						}
					/>
				))}
			</div>
		)
}
