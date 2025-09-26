import { toast } from 'sonner'

import { TrackHash, User } from '@/shared/api'
import { rtkApi } from '@/shared/api/api'

export const userApi = rtkApi.injectEndpoints({
	endpoints(build) {
		return {
			fetchUser: build.query<User, string>({
				query: (email) => ({
					url: `/user/${email}`,
				}),
				providesTags: (_, __, email) => [{ type: 'User', email }],
			}),
			updateUser: build.mutation<void, User>({
				query: (body) => ({
					url: `/user/${body.email}`,
					method: 'PATCH',
					body,
				}),
				invalidatesTags: (_, __, { email }) => [
					{ type: 'User', email },
					{ type: 'Album', hash: 'LIST' },
				],
			}),
			createUser: build.mutation<void, User>({
				query: (body) => ({
					url: `/user `,
					method: 'POST',
					body,
				}),
				invalidatesTags: (_, __, { email }) => [
					{ type: 'User', email },
				],
			}),
			toggleLikedTrack: build.mutation<
				User,
				{ email: string; trackHash: TrackHash; like: boolean }
			>({
				query: ({ email, trackHash, like }) => ({
					url: `/user/${email}/liked`,
					method: 'PATCH',
					body: { trackHash, like },
				}),
				async onQueryStarted(
					{ email, trackHash, like },
					{ dispatch, queryFulfilled }
				) {
					const patch = dispatch(
						userApi.util.updateQueryData(
							'fetchUser',
							email,
							(draft) => {
								if (!draft.likedHash) draft.likedHash = []
								if (like) {
									if (!draft.likedHash.includes(trackHash))
										draft.likedHash.push(trackHash)
								} else {
									draft.likedHash = draft.likedHash.filter(
										(h) => h !== trackHash
									)
								}
							}
						)
					)

					try {
						await queryFulfilled
						toast.success(
							like ? `Added to liked` : `Removed from liked`
						)
					} catch {
						patch.undo()
						toast.error('Like action failed – reverted')
					}
				},
			}),
		}
	},
})

export const {
	useCreateUserMutation,
	useFetchUserQuery,
	useToggleLikedTrackMutation,
	useUpdateUserMutation,
} = userApi
