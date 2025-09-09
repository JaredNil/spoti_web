import { AlbumInterface } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'

export const albumApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchAlbum: build.query<AlbumInterface, string>({
				query: (id) => ({
					url: `/album/${id}`,
				}),
				providesTags: (result, error, id) => [{ type: 'Album', id }],
			}),
			updateAlbum: build.mutation<void, AlbumInterface>({
				query: ({ id, ...body }) => ({
					url: `/album/${id}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (result, error, { id }) => [
					{ type: 'Album', id },
				],
			}),
		}
	},
})

export const {
	useFetchAlbumQuery,
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
} = albumApi
