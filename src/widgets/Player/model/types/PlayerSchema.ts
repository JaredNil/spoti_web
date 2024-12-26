import { Track, Trackes } from "entities/Track";

export interface PlayerSchema {
	isLoading: boolean;
	error?: string;
	isActivePlayer: boolean; // running player predicate

	volume: number; // 0-100 value

	target: number | null; // current position index of queue
	queue: number[]; // mutation order playlist
	native: number[]; // original order playlist

	hash: string; // hash of last track in player
	track: Track | null; // current TrackInfo
	isLoadingTrack: boolean;
	isRun: boolean; // running music in player right now predicate
}
