import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { Track, Trackes, TrackesHash, TrackHash } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'
import { extractIds } from '@/shared/lib/extractIds'
import { ze } from '@/shared/lib/log'

export const trackApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		/*
		  Один id запрос -> Кэшируем коллекцию из одного трека
		*/
		fetchTrack: build.query<Trackes, TrackHash>({
			query: (hash) => ({
				url: `/track?query=${hash}`,
			}),
			keepUnusedDataFor: Number.MAX_SAFE_INTEGER,
			providesTags: (_, __, hash) => [{ type: 'Track', hash }],
		}),
		/*
		  Коллекция id запросов -> Кэшируем коллекцию из треков
		*/
		fetchTrackes: build.query<Trackes, TrackesHash>({
			query: (ids) => ({
				url: `/track?query=${ids.join(',')}`,
			}),
			serializeQueryArgs: ({ queryArgs }) => {
				const sortedIds = [...queryArgs].sort()
				return sortedIds.join(',')
			},
			providesTags: (result) =>
				result
					? [
							...result.map(({ hash }) => ({
								type: 'Track' as const,
								hash,
							})),
							{ type: 'Track', hash: 'LIST' },
						]
					: [{ type: 'Track', hash: 'LIST' }],
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					data.forEach((track: Track) => {
						dispatch(
							trackApi.util.upsertQueryData(
								'fetchTrack',
								track.hash,
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
			{ trackes: Trackes; trackesHash: TrackesHash },
			string
		>({
			queryFn: async (searching, _, __, baseQuery) => {
				if (!searching)
					return {
						data: {
							trackes: [], // empty searching
							trackesHash: [],
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
								trackesHash: [],
							},
						}
					}

					const searchedTrackes = searchData.data as Trackes
					if (searchedTrackes.length === 0) {
						return {
							data: {
								trackes: [],
								trackesHash: [],
							},
						}
					}
					const trackesHash = extractIds(searchedTrackes)
					return {
						data: {
							trackes: searchedTrackes,
							trackesHash,
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
			query: ({ hash, ...body }) => ({
				url: `/track/${hash}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_, __, { hash }) => [{ type: 'Track', hash }],
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
			invalidatesTags: (_, __, { hash }) => [{ type: 'Track', hash }],
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
