import { StateSchema } from '@/shared/lib/state'

export const getAuthUsername = (state: StateSchema) => state.auth?.authUser
export const getAuthPassword = (state: StateSchema) => state.auth?.authPass
export const getAuthIsValid = (state: StateSchema) => state.auth?.isValid
export const getAuthIsLoading = (state: StateSchema) =>
	state.auth?.getAuthIsLoading
export const getAuthError = (state: StateSchema) => state.auth?.error
