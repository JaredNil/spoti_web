import { TrackesListItem } from './ui/trackesListItem'
import { TrackesListLabel } from './ui/trackesListLabel'
import { TrackesListSkeleton } from './ui/trackesListSkeleton'

import { DropdownTrack } from '@/app/playlist/ui/dropdownTrack'
import { Track, Trackes, TrackesId } from '@/shared/api'

export type DropdownProps = {
	deleteHandle: () => void
	track: Track
}

interface TrackViewListingProps {
	relayTrackesId?: TrackesId
	isCompact: boolean
	isLoadingTrackes: boolean
	trackes?: Trackes
	albumPageId?: string
	classname: string

	type?: 'playlist' | 'all'
}

export const TrackesList: React.FC<TrackViewListingProps> = ({
	relayTrackesId,
	isCompact,
	isLoadingTrackes,
	albumPageId,
	trackes,
	classname,
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
			</div>
		)
}
