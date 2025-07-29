export enum AlbumListType {
	COMMON = 0,
	USER = 1,
}

export const getAlbumListTitle = (type: AlbumListType): string => {
	let title: string;
	switch (type) {
		case 0:
			title = 'Общие плейлисты';
			break;
		case 1:
			title = 'Пользовательские плейлисты';
			break;
		default:
			title = 'Какие-то плейлисты';
			break;
	}
	return title;
};
