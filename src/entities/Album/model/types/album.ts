export interface AlbumInterface {
	id: number | null;
	user_id: number | null;
	author: string;
	title: string;
	description?: string;
	imagePath: string;
	trackesId: number[];
	creationDate?: Date;
}
export type AlbumsCollection = AlbumInterface[];
