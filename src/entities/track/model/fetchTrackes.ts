import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

import { Track, Trackes } from '@/shared/api'

export async function fetchTrackes(trackesId: number[]): Promise<Trackes> {
	return TRACKES.filter((track) => {
		if (trackesId.includes(track.id)) {
			return track
		}
	})
}

export async function fetchTrack(track_id: number): Promise<Track> {
	return TRACKES[track_id]
}
