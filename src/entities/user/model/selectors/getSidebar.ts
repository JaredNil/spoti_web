import { StateSchema } from '@/shared/lib/state'

export const getIsSidebarVisible = (state: StateSchema) =>
	state?.user.isSidebarVisible
export const getSidebarWidth = (state: StateSchema) => state?.user.sidebarWidth
