import { createSlice } from '@reduxjs/toolkit'

import { UserSchema } from '../types/user'

const initialState: UserSchema = {
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		onLoadingUser: (state) => {
			state.isLoading = true
		},
		offLoadingUser: (state) => {
			state.isLoading = false
		},
	},
	extraReducers: (builder) => {},
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
