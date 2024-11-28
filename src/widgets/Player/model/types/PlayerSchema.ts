import { Trackes } from "entities/Track";

export interface PlayerSchema {
	isLoading: boolean;
	error?: string;
	isActivePlayer: boolean;

	volume: number;

	target: number[];
	queue: Trackes;

	isRun: boolean;
}
