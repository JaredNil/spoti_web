import { Trackes } from '@/shared/api/track'

export interface SearchpageSchema {
	isLoading?: boolean
	trackes: Trackes
	trackesId: number[]
	error?: string
}
