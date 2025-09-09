import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export async function fetchMetaTrackesServer(
	trackesHash: TrackesId
): Promise<Trackes> {
	const promises = trackesHash.map((hash) =>
		fetch(`${process.env.KV_STORAGE}/tracks/${hash}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(async (res) => {
			if (!res.ok) return null // ДОБАВИТЬ ОБРАБОТКУ ОШИБОК, BACKLOG
			const track = (await res.json()) as Track
			track.id = hash
			return track
		})
	)
	const trackes = (await Promise.all(promises)) as Trackes
	return trackes
}

export async function fetchMetaTrackServer(trackId: TrackId): Promise<Track> {
	const trackMetadata = await fetch(
		`${process.env.KV_STORAGE}/tracks/${trackId}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
	)
	if (!trackMetadata.ok) {
		throw new Error(`Track ${trackId} not found`)
	}
	const track = (await trackMetadata.json()) as Track
	track.id = trackId // REFACTOR IN FUTURE FOR HASH_TRACK
	return track
}

export async function fetchAllMetaTrackesServer(): Promise<Trackes> {
	const trackesMetadata = await fetch(`${process.env.KV_STORAGE}/tracks`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
	if (!trackesMetadata.ok) {
		throw new Error(`Trackes not found`)
	}
	const trackes = (await trackesMetadata.json()) as Trackes
	return trackes
}

export const createMetaTrack = async (body: Track): Promise<number> => {
	return fetch(`${process.env.KV_STORAGE}/tracks`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).then(async (res) => {
		if (!res.ok) {
			const text = await res.text()
			ze(`createMetaTrack error ${res.status}: ${text}`)
		}
		return res.status
	})
}
