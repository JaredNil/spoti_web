import { AlbumInterface } from "entities/Album";
import { Trackes } from "entities/Track";

export interface PlayListPageSchema {
	isLoadingData: boolean;
	isLoadingTrackes: boolean;
	error: string;
	isShowTrackModal: boolean;
	album_id: number | null;
	album: AlbumInterface | null;
	trackes: Trackes | null;
}
