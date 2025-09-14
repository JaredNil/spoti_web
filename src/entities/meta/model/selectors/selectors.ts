import { StateSchema } from '@/shared/lib/state'

export const getIsSidebarVisible = (state: StateSchema) =>
	state.meta.isSidebarVisible
export const getSidebarWidth = (state: StateSchema) => state.meta.sidebarWidth
export const getUserSearch = (state: StateSchema) => state.meta.search
export const getIsVisibleModal = (state: StateSchema) =>
	state.meta.isVisibleModal
