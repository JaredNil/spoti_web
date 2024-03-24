import { AlbumInterface } from './album';

export interface AlbumsSchema {
	isLoading: boolean;
	error: string;
	commonAlbums: AlbumInterface[];
	userAlbums: AlbumInterface[];
}

export type AlbumsPost = AlbumInterface[];

export interface TrackPost {
	albumId: number;
	artist: string;
	audio: string;
	id: number;
	name: string;
	picture: string;
}
