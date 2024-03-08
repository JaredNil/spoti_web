export interface TrackBlob {
	name: string;
	progress: number;
}

export interface UploadPageSchema {
	isLoading: boolean;
	error?: string;

	uploading: TrackBlob[];
}
