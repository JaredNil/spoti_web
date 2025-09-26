import { toast } from 'sonner'

import { albumApi } from '@/entities/album'
import { Track } from '@/shared/api'

export const useChangeAlbum = (albumId: string) => {
	const [add, { isLoading: isUpdatingAdd }] = albumApi.useAddTrackMutation()
	const [remove, { isLoading: isUpdatingDel }] =
		albumApi.useRemoveTrackMutation()

	const addTrack = (track: Track) => {
		add({ albumHash: albumId, trackHash: track.hash as string })
	}

	const deleteTrack = (track: Track) => {
		remove({ albumHash: albumId, trackHash: track.hash as string })
	}
	// const deleteTrack = (track: Track) => {
	// 	try {
	// 		fetchAlbum(albumId).then((r) => {
	// 			const origin = r.data as Album
	// 			const newAlbum = Object.assign({}, origin)
	// 			newAlbum.trackesHash = newAlbum.trackesHash.filter(
	// 				(hash) => hash !== track.hash
	// 			)
	// 			updateAlbum(newAlbum).then(() => {
	// 				toast.success('Track delete')
	// 			})
	// 		})
	// 	} catch (_) {
	// 		toast.error('Delete track error')
	// 	}
	// }

	// const addTrack = (track: Track) => {
	// 	try {
	// 		fetchAlbum(albumId).then((r) => {
	// 			const origin = r.data as Album
	// 			const newAlbum = Object.assign({}, origin)
	// 			newAlbum.trackesHash = [...origin.trackesHash, track.hash]
	// 			updateAlbum(newAlbum).then(() => {
	// 				toast.success('Track added')
	// 			})
	// 		})
	// 	} catch (_) {
	// 		toast.error('Adding track error')
	// 	}
	// }

	return {
		deleteTrack,
		addTrack,
		isUpdatingTrack: isUpdatingAdd || isUpdatingDel,
	}
}
