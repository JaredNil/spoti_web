import { Album, AlbumsCollection } from '@/shared/api'
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
			deleteAlbum: build.mutation<void, string>({
				query: (hash) => ({
					url: `/album/${hash}`,
					method: 'DELETE',
				}),
				// invalidatesTags: (_, __, hash) => [
				// 	{ type: 'Album', hash },
				// 	{ type: 'Album', hash: 'LIST' },
				// ],
			}),
			createAlbum: build.mutation<void, Album>({
				query: (body) => ({
					url: `/album`,
					method: 'POST',
					body,
				}),
				// invalidatesTags: (_, __, hash) => [
				// 	{ type: 'Album', hash },
				// 	{ type: 'Album', hash: 'LIST' },
				// ],
			}),
		}
	},
})

export const {
	useFetchAlbumQuery,
	useDeleteAlbumMutation,
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
	useCreateAlbumMutation,
	useFetchAlbumsByUserQuery,
} = albumApi
