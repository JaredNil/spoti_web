export type AlbumListType = 'COMMON' | 'USER' | 'COMMUNITY'

export const getAlbumListTitle = (type: AlbumListType): string => {
	let title: string
	switch (type) {
		case 'COMMON':
			title = 'Common Jarefy playlist'
			break
		case 'USER':
			title = 'My playlist'
			break
		case 'COMMUNITY':
			title = 'Playlists other users'
			break

		default:
			title = 'Какие-то плейлисты'
			break
	}
	return title
}
