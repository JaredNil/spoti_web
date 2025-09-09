import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'
import { extractIds } from '@/shared/lib/extractIds'

export const trackApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchTrack: build.query<Track, TrackId>({
				query: (trackId) => ({
					url: `/track?query=${trackId}`,
				}),
				transformResponse: (res: Track[]) => res[0],
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
			}),
			fetchAllTrackes: build.query<Trackes, void>({
				query: () => ({
					url: `/track/all`,
				}),
			}),
			searchTrackes: build.query<
				{ trackes: Trackes; trackesId: TrackesId },
				string
			>({
				queryFn: async (searching, _, __, baseQuery) => {
					if (!searching) {
						return {
							data: {
								trackes: [],
								trackesId: [],
							},
						}
					}
					try {
						const searchData = await Promise.resolve(
							baseQuery(`/search?query=${searching}`)
						)

						if (searchData.error) {
							console.warn(searchData.error)
							return {
								data: {
									trackes: [],
									trackesId: [],
								},
							}
						}

						const searchedTrackes = searchData.data as Trackes
						if (searchedTrackes.length === 0) {
							return {
								data: {
									trackes: [],
									trackesId: [],
								},
							}
						}
						const trackesId = extractIds(searchedTrackes)
						return {
							data: {
								trackes: searchedTrackes,
								trackesId,
							},
						}
					} catch (err) {
						return { error: err as FetchBaseQueryError }
					}
				},
			}),
			updateTrack: build.mutation<void, Track>({
				query: ({ id, ...body }) => ({
					url: `/track/${id}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (result, error, { id }) => [
					{ type: 'Track', id },
				],
			}),
			createTrack: build.mutation<number, Track>({
				query: (body) => ({
					url: `/track`,
					method: 'POST',
					body,
				}),
				invalidatesTags: (result, error, { id }) => [
					{ type: 'Track', id },
				],
			}),
		}
	},
})

export const {
	useFetchTrackQuery,
	useLazyFetchTrackQuery,
	useFetchTrackesQuery,
	useLazyFetchTrackesQuery,
	useSearchTrackesQuery,
	useFetchAllTrackesQuery,
	useLazyFetchAllTrackesQuery,
	useCreateTrackMutation,
} = trackApi
