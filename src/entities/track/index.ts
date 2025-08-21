import { TRACKES } from '../../shared/api/cache/TRACKES_CONTENT'

import { Trackes } from '@/shared/api/track'

export async function fetchTrackes(trackes_id: number[]): Promise<Trackes> {
	console.log(trackes_id)

	return TRACKES.filter((track) => {
		if (trackes_id.includes(track.id)) {
			return track
		}
	})
}
