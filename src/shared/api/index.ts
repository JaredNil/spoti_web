export type TrackId = string
export type TrackesId = TrackId[]

export type AlbumHash = string
export type AlbumsHash = AlbumHash[]

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

export interface User {
	email: string
	trackesId: TrackesId
	albumsId: AlbumsHash
	createdAt: string
	imageHash: string
	firstname: string
	lastname: string
	phone: string
	password: string // in future put in db
	'2fa': boolean
}
