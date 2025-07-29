import { AlbumInterface } from './album';

export type AlbumsSchema = {
	isLoading: boolean;
	error: string;
	commonAlbums: AlbumInterface[];
	userAlbums: AlbumInterface[];
}

