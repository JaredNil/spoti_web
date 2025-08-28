import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'

export async function fetchTrackesServer(
	trackesId: TrackesId
): Promise<Trackes> {
	return TRACKES.filter((track) => {
		if (trackesId.includes(track.id)) {
			return track
		}
	})
}

export async function fetchTrackServer(trackId: TrackId): Promise<Track> {
	return TRACKES[trackId]
}
