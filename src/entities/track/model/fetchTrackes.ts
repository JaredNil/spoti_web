import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

import { Track, Trackes } from '@/shared/api/track'

export async function fetchTrackes(trackes_id: number[]): Promise<Trackes> {
	return TRACKES.filter((track) => {
		if (trackes_id.includes(track.id)) {
			return track
		}
	})
}

export async function fetchTrack(track_id: number): Promise<Track> {
	return TRACKES[track_id]
}
