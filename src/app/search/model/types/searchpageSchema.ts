import { Trackes, TrackesId } from '@/shared/api'

export interface SearchpageSchema {
	isLoading?: boolean
	trackes: Trackes
	trackesId: TrackesId
	error?: string
}
