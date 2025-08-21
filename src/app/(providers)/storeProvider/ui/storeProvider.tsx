import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../config/store'

const store = createStore()
export type AppDispatch = typeof store.dispatch

export const StoreProvider = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>
}
