import { User } from '@/shared/api'
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
		}
	},
})

export const {
	useCreateUserMutation,
	useFetchUserQuery,
	useUpdateUserMutation,
} = userApi
