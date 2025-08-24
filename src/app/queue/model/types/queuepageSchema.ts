import { Trackes } from '@/shared/api/track'

export interface QueuepageSchema {
	isLoading: boolean
	error?: string
	trackes: Trackes
}
