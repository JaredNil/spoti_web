export type TrackId = number
export type TrackesId = TrackId[]

export interface AlbumInterface {
	id: number | null
	user_id: number | null
	author: string
	title: string
	description?: string
	imagePath?: string
	trackesId: TrackesId
	creationDate?: string
}
export type AlbumsCollection = AlbumInterface[]

export interface Track {
	id: number
	userId: number
	author: string
	title: string
	songLink?: string
	imageLink?: string
	hash?: string // empty, for demo. Include in interface
}

export type Trackes = Track[]
