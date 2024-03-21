import { AlbumInterface } from './album';

export interface AlbumSchema {
	isLoading: boolean;
	error: string;
	commonAlbums: AlbumInterface[];
	userAlbums: AlbumInterface[];
}
