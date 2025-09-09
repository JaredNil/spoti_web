import { FC, useState } from 'react'

import { TrackesEditList } from './trackesEditList'

import { useLazyFetchAllTrackesQuery } from '@/entities/track'
import { extractIds } from '@/shared/lib/extractIds'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

interface TrackesEditProps {
	isCompact: boolean
	albumPageId: string
	classname: string
}

export const TrackesEdit: FC<TrackesEditProps> = ({
	isCompact,
	classname,
	albumPageId,
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)

	const [
		fetchAllTrackes,
		{ data: trackes, isLoading: isLoadingEditTrackes, isUninitialized },
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
				<TrackesEditList
					isCompact={isCompact}
					relayTrackesId={trackesId}
					trackes={trackes ?? []}
					isLoadingEditTrackes={isLoadingEditTrackes}
					classname={classname}
					albumPageId={albumPageId}
				/>
			)}
		</div>
	)
}
