import { toast } from 'sonner'

import {
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} from '@/entities/album'
import { Album, Track } from '@/shared/api'

export const useChangeAlbum = (albumId: string) => {
	const [updateAlbum, { isLoading: isUpdating }] = useUpdateAlbumMutation()
	const [fetchAlbum] = useLazyFetchAlbumQuery()

	const deleteTrack = (track: Track) => {
		try {
			fetchAlbum(albumId).then((r) => {
				const origin = r.data as Album
				const newAlbum = Object.assign({}, origin)
				newAlbum.trackesHash = newAlbum.trackesHash.filter(
					(hash) => hash !== track.hash
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
				const origin = r.data as Album
				const newAlbum = Object.assign({}, origin)
				newAlbum.trackesHash = [...origin.trackesHash, track.hash]
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
