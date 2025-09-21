import { StateSchema } from '@/shared/lib/state'

export const getIsLoadingPage = (state: StateSchema) =>
	state.searchpage?.isLoading || false

export const getSearchTrackes = (state: StateSchema) =>
	state.searchpage?.trackes

export const getSearchTrackesHash = (state: StateSchema) =>
	state.searchpage?.trackesHash
