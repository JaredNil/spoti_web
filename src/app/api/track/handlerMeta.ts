import { Track, Trackes, TrackesHash, TrackHash } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export async function fetchMetaTrackesServer(
	trackesHash: TrackesHash
): Promise<Trackes> {
	const promises = trackesHash.map((hash) =>
		fetch(`${process.env.KV_STORAGE}/tracks/${hash}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(async (res) => {
			if (!res.ok) return null // ДОБАВИТЬ ОБРАБОТКУ ОШИБОК, BACKLOG
			const track = (await res.json()) as Track
			return track
		})
	)
	const trackes = (await Promise.all(promises)) as Trackes
	return trackes
}

export async function fetchMetaTrackServer(
	trackHash: TrackHash
): Promise<Track> {
	const trackMetadata = await fetch(
		`${process.env.KV_STORAGE}/tracks/${trackHash}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
	)
	if (!trackMetadata.ok) {
		throw new Error(`Track ${trackHash} not found`)
	}
	const track = (await trackMetadata.json()) as Track
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
