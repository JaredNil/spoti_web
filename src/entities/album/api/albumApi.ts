import { Album } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'

export const albumApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchAlbum: build.query<Album, string>({
				query: (hash) => ({
					url: `/album/${hash}`,
				}),
				providesTags: (_, __, hash) => [{ type: 'Album', hash }],
			}),
			updateAlbum: build.mutation<void, Album>({
				query: ({ hash, ...body }) => ({
					url: `/album/${hash}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (_, __, { hash }) => [{ type: 'Album', hash }],
			}),
			createAlbum: build.mutation<void, Album>({
				query: (body) => ({
					url: `/album`,
					method: 'POST',
					body,
				}),
				invalidatesTags: (result, error, { hash }) => [
					{ type: 'Album', hash },
				],
			}),
		}
	},
})

export const {
	useFetchAlbumQuery,
	useLazyFetchAlbumQuery,
	useUpdateAlbumMutation,
	useCreateAlbumMutation,
} = albumApi
