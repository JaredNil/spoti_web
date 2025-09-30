import { Track, Trackes, TrackesHash } from '@/shared/api'

export interface PlayerSchema {
	isLoading: boolean
	error?: string
	isActivePlayer: boolean // running player predicate

	volume: number // 0-100 value

	target: number | undefined // current position index of queue
	queue: TrackesHash // mutation order playlist
	native: TrackesHash // original order playlist

	hash: string // hash of last track in player
	track?: Track // current TrackInfo
	nextTrack?: Track // current TrackInfo
	isLoadingTrack: boolean
	isRun: boolean // running music in player right now predicate

	timer: number | 0
	duration: number | 0
	progress: number | 0
}
