import { StateSchema } from '@/shared/lib/state'

export const getQueueTrackes = (state: StateSchema) =>
	state.queuepage?.trackes || []
export const getQueueIsLoading = (state: StateSchema) =>
	state.queuepage?.isLoading || true
