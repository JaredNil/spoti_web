import { fetchAlbumById, updateAlbum } from '../../handler'

export const addTrackToAlbum = async (
	albumId: string,
	trackHash: string
): Promise<{ trackesHash: string[] }> => {
	const album = await fetchAlbumById(albumId)
	if (!album) throw new Error('Album not found')

	const set = new Set(album.trackesHash)
	set.add(trackHash)

	const newHashes = Array.from(set)
	await updateAlbum(albumId, { ...album, trackesHash: newHashes })

	return { trackesHash: newHashes } // вернём только массив
}

export const removeTrackFromAlbum = async (
	albumId: string,
	trackHash: string
): Promise<{ trackesHash: string[] }> => {
	const album = await fetchAlbumById(albumId)
	if (!album) throw new Error('Album not found')

	const newHashes = album.trackesHash.filter((h) => h !== trackHash)
	await updateAlbum(albumId, { ...album, trackesHash: newHashes })

	return { trackesHash: newHashes }
}
