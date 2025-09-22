import { TrackesListItem } from './ui/trackesListItem'
import { TrackesListLabel } from './ui/trackesListLabel'
import { TrackesListSkeleton } from './ui/trackesListSkeleton'

import { DropdownTrack } from '@/app/playlist/ui/dropdownTrack'
import { Track, Trackes, TrackesHash } from '@/shared/api'

export type DropdownProps = {
	deleteHandle: () => void
	track: Track
}

interface TrackViewListingProps {
	relayTrackesId?: TrackesHash
	isCompact: boolean
	isLoadingTrackes: boolean
	trackes?: Trackes
	albumPageId?: string

	type?: 'playlist' | 'all'
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	type = 'playlist',
}) => {
	if (isLoadingTrackes) return <TrackesListSkeleton isCompact={isCompact} />

	if (!trackes || trackes.length === 0)
		return (
			<div className="select-none h-30 flex items-center justify-center text-neutral-400">
				В плейлисте отсутствуют треки.
			</div>
		)
	else
		return (
			<>
				<TrackesListLabel isCompact={isCompact} />
				{trackes?.map((track, i) => (
					<TrackesListItem
						key={track.hash ?? track.title}
						position={i}
						isCompact={isCompact}
						relayTrackesId={relayTrackesId}
						track={track}
						customButton={
							type === 'playlist' &&
							albumPageId && (
								<DropdownTrack
									albumPageId={albumPageId}
									track={track}
								/>
							)
						}
					/>
				))}
			</>
		)
}
