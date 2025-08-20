import { AlbumInterface } from '@/shared/api/album'

export type AlbumsSchema = {
    isLoading: boolean
    error: string
    commonAlbums: AlbumInterface[]
    userAlbums: AlbumInterface[]
}
