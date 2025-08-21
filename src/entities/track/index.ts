import { TRACKES } from '../../../public/content/TRACKES_CONTENT'

import { Trackes } from '@/shared/api/track'

export async function fetchTrackes(trackes_id: number[]): Promise<Trackes> {
	return TRACKES.filter((track) => {
		if (trackes_id.includes(track.id)) {
			return track
		}
	})
}
