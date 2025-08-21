'use client'

import TrackPageHeader from '../track/ui/trackPageHeader'

// import { Track } from '@/entities/track'
// import { useAppSelector } from '@/shared/hooks'
// import { getPlayerQueue } from '@/widgets/player'

// DEPRECATED PAGE, NOT WORKER QUEUE IN SERVER COMPONENTS

export default function QueuePage() {
	// const queue = useAppSelector(getPlayerQueue)

	return (
		<>
			<TrackPageHeader title={'Queue trackes'} />
			<div className="flex flex-col gap-4">
				{/* {queue.length === 0 && <span>Очередь пуста</span>}
				{queue.map((trackId) => (
					<Track key={trackId} id={trackId} />
				))} */}
			</div>
		</>
	)
}
