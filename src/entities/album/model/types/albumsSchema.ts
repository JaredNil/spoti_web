import { AlbumInterface } from '@/shared/api'

export type AlbumsSchema = {
	isLoading: boolean
	error: string
	commonAlbums: AlbumInterface[]
	userAlbums: AlbumInterface[]
}
