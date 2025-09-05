import { AlbumInterface } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'

export const albumApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchAlbum: build.query<AlbumInterface, string>({
				query: (id) => ({
					url: `/album/${id}`,
				}),
				providesTags: (_, __, id) => [{ type: 'Album', id }],
			}),
			updateAlbum: build.mutation<void, AlbumInterface>({
				query: ({ id, ...body }) => ({
					url: `/album/${id}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (_, __, { id }) => [{ type: 'Album', id }],
			}),
			// deleteAlbum: build.mutation<void, string>({
			// 	query: (id) => ({
			// 		url: `/album/${id}`,
			// 		method: 'DELETE',
			// 	}),
			// 	invalidatesTags: (_, __, id) => [{ type: 'Album', id }],
			// }),
		}
	},
})

export const {
	useFetchAlbumQuery,
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} = albumApi
