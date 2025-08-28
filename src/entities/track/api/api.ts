import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'
import { rtkApi } from '@/shared/api/rtkApi'

export const trackApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchTrack: build.query<Track, TrackId>({
				query: (trackId) => ({
					url: `/api/track?query=${trackId}`,
				}),
			}),
			fetchTrackes: build.query<Trackes, TrackesId>({
				queryFn: async (ids, _, __, baseQuery) => {
					try {
						const promises = ids.map((id) =>
							baseQuery(`/track?query=${id}`)
						)
						const responses = await Promise.all(promises)

						for (const res of responses) {
							if (res.error) throw res.error
						}

						const tracks = responses.flatMap(
							(res) => res.data as Track
						)

						return { data: tracks }
					} catch (err) {
						return { error: err as FetchBaseQueryError }
					}
				},

				// serializeQueryArgs: ({ queryArgs }) => ({
				// 	fetchTrackesServer: queryArgs.sort().join(','),
				// }),

				// providesTags: (result) => {
				// 	if (result) {
				// 		return [
				// 			...result.map(({ id }) => ({
				// 				type: 'Track' as const,
				// 				id,
				// 			})),
				// 			{ type: 'Track', id: 'LIST' },
				// 		]
				// 	}
				// 	// else return { [{ type: 'Track', id: 'LIST' }]}
				// },
			}),
		}
	},
})

export const {
	useFetchTrackQuery,
	useLazyFetchTrackQuery,
	useFetchTrackesQuery,
	useLazyFetchTrackesQuery,
} = trackApi
