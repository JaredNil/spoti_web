import { toast } from 'sonner'

import {
	Album,
	AlbumsCollection,
	Track,
	TrackHash,
	TrackesHash,
} from '@/shared/api'
import { rtkApi } from '@/shared/api/api'
import { ze } from '@/shared/lib/log'

export const albumApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchAlbum: build.query<Album, string>({
				query: (hash) => ({
					url: `/album/${hash}`,
				}),
				providesTags: (_, __, hash) => [{ type: 'Album', hash }],
			}),
			fetchAlbumsByUser: build.query<AlbumsCollection, string>({
				query: (email) => ({
					url: `/albums/${email}`,
				}),
				providesTags: (result) =>
					result
						? [
								...result.map(({ hash }) => ({
									type: 'Album' as const,
									hash,
								})),
								{ type: 'Album', hash: 'LIST' },
							]
						: [{ type: 'Album', hash: 'LIST' }],
				async onQueryStarted(_, { dispatch, queryFulfilled }) {
					try {
						const { data } = await queryFulfilled
						data.forEach((album: Album) => {
							dispatch(
								albumApi.util.upsertQueryData(
									'fetchAlbum',
									album.hash,
									album
								)
							)
						})
					} catch {
						ze('Ошибка запроса метаданных плейлистов')
					}
				},
			}),
			updateAlbum: build.mutation<void, Album>({
				query: ({ hash, ...body }) => ({
					url: `/album/${hash}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (_, __, { hash }) => [{ type: 'Album', hash }],
			}),
			// updateAlbumHidden: build.mutation<void, Album>({
			// 	query: ({ hash, ...body }) => ({
			// 		url: `/album/${hash}`,
			// 		method: 'PATCH',
			// 		body,
			// 	}),
			// 	async onQueryStarted(albumData, { dispatch, queryFulfilled }) {
			// 		const patchResult = dispatch(
			// 			albumApi.util.updateQueryData(
			// 				'fetchAlbum',
			// 				albumData.hash,
			// 				(draft) => {
			// 					Object.assign(draft, albumData)
			// 				}
			// 			)
			// 		)

			// 		try {
			// 			await queryFulfilled
			// 		} catch {
			// 			patchResult.undo()
			// 			throw new Error('Failed to update album')
			// 		}
			// 	},
			// }),
			updateTrackOrder: build.mutation<
				void,
				{ albumHash: string; trackesHash: TrackesHash }
			>({
				query: ({ albumHash, trackesHash }) => ({
					url: `/album/${albumHash}`,
					method: 'PATCH',
					body: { trackesHash },
				}),
				async onQueryStarted(
					{ albumHash, trackesHash },
					{ dispatch, queryFulfilled }
				) {
					const patchResult = dispatch(
						albumApi.util.updateQueryData(
							'fetchAlbum',
							albumHash,
							(draft) => {
								draft.trackesHash = trackesHash
							}
						)
					)

					try {
						await queryFulfilled
					} catch {
						patchResult.undo()
						throw new Error('Failed to update track order')
					}
				},
			}),
			deleteAlbum: build.mutation<void, string>({
				query: (hash) => ({
					url: `/album/${hash}`,
					method: 'DELETE',
				}),
			}),
			createAlbum: build.mutation<void, Album>({
				query: (body) => ({
					url: `/album`,
					method: 'POST',
					body,
				}),
			}),
			addTrack: build.mutation<
				void,
				{ albumHash: string; trackHash: TrackHash }
			>({
				query: ({ albumHash, trackHash }) => ({
					url: `/album/${albumHash}/track/${trackHash}`,
					method: 'PUT',
				}),

				async onQueryStarted(
					{ albumHash, trackHash },
					{ dispatch, queryFulfilled }
				) {
					const patchResult = dispatch(
						albumApi.util.updateQueryData(
							'fetchAlbum',
							albumHash,
							(draft) => {
								if (!draft.trackesHash) draft.trackesHash = []
								if (!draft.trackesHash.includes(trackHash))
									draft.trackesHash.push(trackHash)
							}
						)
					)

					try {
						await queryFulfilled
						toast.success('Track added')
					} catch {
						patchResult.undo()
						toast.error('Adding failed – reverted')
					}
				},
			}),

			removeTrack: build.mutation<
				void,
				{ albumHash: string; trackHash: TrackHash }
			>({
				query: ({ albumHash, trackHash }) => ({
					url: `/album/${albumHash}/track/${trackHash}`,
					method: 'DELETE',
				}),

				async onQueryStarted(
					{ albumHash, trackHash },
					{ dispatch, queryFulfilled }
				) {
					const patchResult = dispatch(
						albumApi.util.updateQueryData(
							'fetchAlbum',
							albumHash,
							(draft) => {
								if (draft.trackesHash)
									draft.trackesHash =
										draft.trackesHash.filter(
											(h) => h !== trackHash
										)
							}
						)
					)

					try {
						await queryFulfilled
						toast.success('Track deleted')
					} catch {
						patchResult.undo()
						toast.error('Delete failed – reverted')
					}
				},
			}),
		}
	},
})

export const {
	useFetchAlbumQuery,
	useDeleteAlbumMutation,
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
	// useUpdateAlbumHiddenMutation,
	useUpdateTrackOrderMutation,
	useCreateAlbumMutation,
	useFetchAlbumsByUserQuery,
	useAddTrackMutation,
	useRemoveTrackMutation,
} = albumApi
