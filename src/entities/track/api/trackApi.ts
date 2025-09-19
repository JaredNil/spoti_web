import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'
import { extractIds } from '@/shared/lib/extractIds'
import { ze } from '@/shared/lib/log'

export const trackApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		/*
		  Один id запрос -> Кэшируем коллекцию из одного трека
		*/
		fetchTrack: build.query<Trackes, TrackId>({
			query: (id) => ({
				url: `/track?query=${id}`,
			}),
			keepUnusedDataFor: Number.MAX_SAFE_INTEGER,
			providesTags: (_, __, id) => [{ type: 'Track', id }],
		}),
		/*
		  Коллекция id запросов -> Кэшируем коллекцию из треков
		*/
		fetchTrackes: build.query<Trackes, TrackesId>({
			query: (ids) => ({
				url: `/track?query=${ids.join(',')}`,
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Track' as const,
								id,
							})),
							{ type: 'Track', id: 'LIST' },
						]
					: [{ type: 'Track', id: 'LIST' }],
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					data.forEach((track: Track) => {
						dispatch(
							trackApi.util.upsertQueryData(
								'fetchTrack',
								track.id,
								[track]
							)
						)
					})
				} catch {
					ze('Ошибка запроса метаданных треков')
				}
			},
		}),
		/*
		  Запрос всех треков экспериментально, временно
		*/
		fetchAllTrackes: build.query<Trackes, void>({
			query: () => ({
				url: `/track/all`,
			}),
		}),
		/*
		  Передача и кэширование поиска
		*/
		searchTrackes: build.query<
			{ trackes: Trackes; trackesId: TrackesId },
			string
		>({
			queryFn: async (searching, _, __, baseQuery) => {
				if (!searching)
					return {
						data: {
							trackes: [], // empty searching
							trackesId: [],
						},
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
		/*
		  Обновление 1 трека
		*/
		updateTrack: build.mutation<void, Track>({
			query: ({ id, ...body }) => ({
				url: `/track/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_, __, { id }) => [{ type: 'Track', id }],
		}),
		/*
		  Создание 1 трека
		*/
		createTrack: build.mutation<number, Track>({
			query: (body) => ({
				url: `/track`,
				method: 'POST',
				body,
			}),
			invalidatesTags: (_, __, { id }) => [{ type: 'Track', id }],
		}),
	}),
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
