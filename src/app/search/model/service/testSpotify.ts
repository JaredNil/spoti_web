import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { Track } from '@/shared/api'

export const setAsyncTrack = createAsyncThunk<Track, void, ThunkConfig>(
	'test/test',
	async (_, { dispatch }) => {
		console.log('test')
		const res = await fetch(
			'https://api.spotify.com/v1/tracks/6rqhFgbbKwnb9MLmUQDhG6',
			{
				headers: {
					Authorization: `Bearer ${'BQBK1gjQh7U5Ym17Nd0tIEBC_qeOGV4tvwqU80iEtmHuBoSVtxelUcrK0MUAuqZB3YzMN3VgBQnOhKfHt-n9m-JSwZT94wvPItm3Ty584b9rdZa8phDkVliTZFWRmpg-YJlrP0KxiZQ'}`,
				},
			}
		)
		const track = (await res.json()) as SpotifyApi.TrackObjectFull
		console.log(track)
		const newTrack: Track = {
			hash: track.id,
			user: 'spotify',
			title: track.name,
			author: track.artists[0].name,
			imageLink: track.album.images[0].url,
			songLink: track.uri,
		}
		return newTrack
	}
)
