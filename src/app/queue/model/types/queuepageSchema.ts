import { Trackes } from '@/shared/api'

export interface QueuepageSchema {
	isLoading: boolean
	error?: string
	trackes: Trackes
}
