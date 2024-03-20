export interface TrackBlob {
	name: string;
	id: number;
	artist?: string;
	picture?: string;
	idPg?: number;

	progress: number;
}

export interface TrackBlobUpdate {
	id: number;
	progress: number;
}

export interface Track {
	name: string;
	artist: string;
	picture: string;
	idPg: number;

	progress: number;
}

export interface UploadpageSchema {
	isLoading: boolean;
	error?: string;
	isDragEvent: boolean;

	uploading: TrackBlob[];
}
