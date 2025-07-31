import { AlbumInterface } from "@/entities/album";
// import { Trackes } from "@/entities/track";

export interface PlaylistPageSchema {
	isLoadingData: boolean;
	isLoadingTrackes: boolean;
	error: string;
	isShowTrackModal: boolean;
	album_id: number | null;
	album: AlbumInterface | null;
	// trackes: Trackes | null;
}
