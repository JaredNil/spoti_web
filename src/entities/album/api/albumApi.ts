import { AlbumInterface } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'

export const albumApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchAlbum: build.query<AlbumInterface, number>({
				query: (id) => ({
					url: `/album/${id}`,
				}),
			}),
		}
	},
})

export const { useFetchAlbumQuery } = albumApi
