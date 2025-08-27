import { Trackes } from '@/shared/api'

export interface SearchpageSchema {
	isLoading?: boolean
	trackes: Trackes
	trackesId: number[]
	error?: string
}
