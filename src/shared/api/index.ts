export type TrackHash = string
export type TrackesHash = TrackHash[]

export type AlbumHash = string
export type AlbumsHash = AlbumHash[]

export interface Album {
	hash: string
	author: string
	title: string
	description?: string
	imagePath?: string
	trackesHash: TrackesHash
	creationDate?: string
}
export type AlbumsCollection = Album[]

export interface Track {
	hash: string
	user: string
	author: string
	title: string
	songLink?: string
	imageLink?: string
}

export type Trackes = Track[]

export interface User {
	email: string
	trackesHash: TrackesHash
	likedHash: TrackesHash
	albumsHash: AlbumsHash
	createdAt: string
	imageHash: string
	firstname: string
	lastname: string
	phone: string
	password: string // in future put in db
	'2fa': boolean
}
