'use client'
import { Reducer } from '@reduxjs/toolkit'
import { FC, memo, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { ReducerList, ReduxStoreWithManager } from './types'

interface DynamicModuleLoaderProps {
	reducers: ReducerList
	removeAfterUnmount?: boolean
	children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = memo(
	({
		reducers,
		children,
		removeAfterUnmount = true,
	}: DynamicModuleLoaderProps) => {
		useEffect(() => console.log('DynamicModuleLoader RENDER'))

		const store = useStore() as ReduxStoreWithManager
		const dispatch = useDispatch()

		useEffect(() => {
			Object.entries(reducers).forEach(([name, reducer]): void => {
				store.reducerManager.add(name as string, reducer as Reducer)
				dispatch({ type: `@load ${name}` })
			})

			return () => {
				if (removeAfterUnmount) {
					Object.entries(reducers).forEach(([name]) => {
						store.reducerManager.remove(name as string)
						dispatch({
							type: `@unload ${name}`,
						})
					})
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [reducers])

		return <>{children}</>
	}
)
