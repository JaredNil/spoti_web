import { Trackes, TrackesHash } from '@/shared/api'

export interface SearchpageSchema {
	isLoading?: boolean
	trackes: Trackes
	trackesHash: TrackesHash
	error?: string
}
