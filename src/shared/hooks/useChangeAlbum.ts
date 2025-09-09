import { toast } from 'sonner'

import {
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} from '@/entities/album'
import { AlbumInterface, Track } from '@/shared/api'

export const useChangeAlbum = (albumId: string) => {
	const [updateAlbum, { isLoading: isUpdating }] = useUpdateAlbumMutation()
	const [fetchAlbum] = useLazyFetchAlbumQuery()

	const deleteTrack = (track: Track) => {
		try {
			fetchAlbum(albumId).then((r) => {
				const origin = r.data as AlbumInterface
				const newAlbum = Object.assign({}, origin)
				newAlbum.trackesId = newAlbum.trackesId.filter(
					(id) => id !== track.id
				)
				updateAlbum(newAlbum).then(() => {
					toast.success('Track delete')
				})
			})
		} catch (_) {
			toast.error('Delete track error')
		}
	}

	const addTrack = (track: Track) => {
		try {
			fetchAlbum(albumId).then((r) => {
				const origin = r.data as AlbumInterface
				const newAlbum = Object.assign({}, origin)
				newAlbum.trackesId = [...origin.trackesId, track.id]
				updateAlbum(newAlbum).then(() => {
					toast.success('Track added')
				})
			})
		} catch (_) {
			toast.error('Adding track error')
		}
	}

	return {
		deleteTrack,
		addTrack,
		isUpdating,
	}
}
