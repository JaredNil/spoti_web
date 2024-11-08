import { AlbumInterface } from './album';

export interface AlbumsSchema {
	isLoading: boolean;
	error: string;
	commonAlbums: AlbumInterface[];
	userAlbums: AlbumInterface[];
}

