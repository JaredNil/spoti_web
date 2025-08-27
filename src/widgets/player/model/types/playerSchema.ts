import { Track } from '@/shared/api'

export interface PlayerSchema {
	isLoading: boolean
	error?: string
	isActivePlayer: boolean // running player predicate

	volume: number // 0-100 value

	target: number | undefined // current position index of queue
	queue: number[] // mutation order playlist
	native: number[] // original order playlist

	hash: string // hash of last track in player
	track?: Track // current TrackInfo
	isLoadingTrack: boolean
	isRun: boolean // running music in player right now predicate

	timer: number | 0
	duration: number | 0
	progress: number | 0
}
