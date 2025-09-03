export type TrackId = string
export type TrackesId = TrackId[]

export interface AlbumInterface {
	id: string
	user_id: string
	author: string
	title: string
	description?: string
	imagePath?: string
	trackesId: TrackesId
	creationDate?: string
}
export type AlbumsCollection = AlbumInterface[]

export interface Track {
	id: string
	userId: string
	author: string
	title: string
	songLink?: string
	imageLink?: string
	hash?: string // empty, for demo. Include in interface
}

export type Trackes = Track[]
