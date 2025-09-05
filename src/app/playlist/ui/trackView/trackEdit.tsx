import { useState } from 'react'

import { TrackViewListing } from './trackViewListing'
import { TrackViewSkeleton } from './trackViewSkeleton'

import { useLazyFetchAllTrackesQuery } from '@/entities/track/api/trackApi'
import { extractIds } from '@/shared/lib/extractIds'

export const TrackEdit = ({
	isCompact,
	albumPageId,
	updateAlbumPage,
}: {
	isCompact: boolean
	albumPageId: string
	updateAlbumPage: () => void
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)

	const [
		fetchAllTrackes,
		{ data: trackes, isLoading: isLoadingTrackes, isUninitialized },
	] = useLazyFetchAllTrackesQuery()
	const trackesId = extractIds(trackes ?? [])

	return (
		<div className="w-full ">
			<div className="flex justify-center items-center">
				<div
					onClick={() =>
						setIsEdit((prev) => {
							if (isUninitialized) fetchAllTrackes()
							return !prev
						})
					}
					className=" py-2 px-4 rounded-t-xl
					bg-green-500 text-neutral-800
					cursor-pointer"
				>
					Add new trackes
				</div>
			</div>
			{isEdit && (
				<div>
					{/* {isLoadingTrackes ? (
						<TrackViewSkeleton isCompact={isCompact} />
					) : (
						<TrackEditListing
							isCompact={isCompact}
							trackesId={trackesId}
							type="add"
							albumPageId={albumPageId}
						/>
					)} */}
				</div>
			)}
		</div>
	)
}
