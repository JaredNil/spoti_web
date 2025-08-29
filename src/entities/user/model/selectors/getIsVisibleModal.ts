import { StateSchema } from '@/shared/lib/state'

export const getIsVisibleModal = (state: StateSchema) =>
	state.user.isVisibleModal
