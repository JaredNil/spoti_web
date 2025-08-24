import { TRACKES } from '../../../shared/api/cache/TRACKES_CONTENT'

import { Trackes } from '@/shared/api/track'

export async function fetchAllTrackes(): Promise<Trackes> {
	return TRACKES
}
