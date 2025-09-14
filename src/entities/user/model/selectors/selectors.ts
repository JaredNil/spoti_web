import { StateSchema } from '@/shared/lib/state'

export const getIsLoadingUser = (state: StateSchema) => state.user.isLoading
