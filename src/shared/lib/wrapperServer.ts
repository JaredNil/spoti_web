import { createWrapper } from 'next-redux-wrapper'

import { createStore } from '@/app/(providers)/storeProvider'
import { AppStore } from '@/app/(providers)/storeProvider/config/types'

export const wrapper = createWrapper<AppStore>(() => createStore(), {
	debug: process.env.NODE_ENV === 'development',
})
