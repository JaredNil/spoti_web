export type UploadState = 'idle' | 'uploading' | 'success' | 'error'

export interface TrackMeta {
	title: string
	author: string
}

export interface TrackForm extends TrackMeta {
	id: string
	file: File
	status: UploadState
}
