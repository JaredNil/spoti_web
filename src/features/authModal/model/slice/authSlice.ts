import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthSchema } from '../type/authSchema'

const initialState: AuthSchema = {
	authUser: '',
	authPass: '',

	isLoading: true,
	isValid: false,
	error: undefined,

	// DEPRECATED
	// isOpen: false,
	// onClose: ()=>{},
	// onOpen: ()=>{},
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.authUser = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.authPass = action.payload
		},
		setVaild: (state, action: PayloadAction<boolean>) => {
			state.isValid = action.payload
		},
		// DEPRECATED
		// setTools: (state, action: PayloadAction<toolsModal>) =>{
		// 	state.isOpen = action.payload.isOpen;
		// 	state.onOpen = action.payload.onOpen;
		// 	state.onClose = action.payload.onClose;
		// },
		// setOpenModal: (state) => {
		// 	state.isOpen = true;
		// },
		// setCloseModal: (state) => {
		// 	state.isOpen = true;
		// },
	},
})

export const { actions: authAction } = authSlice
export const { reducer: authReducer } = authSlice
