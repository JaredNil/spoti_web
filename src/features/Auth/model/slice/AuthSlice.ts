import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';

const initialState: AuthSchema = {
	authUser: '',
	authPass: '',

	isLoading: false,
	isValid: false,
	error: undefined,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.authUser = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.authPass = action.payload;
		},
		setVaild: (state, action: PayloadAction<boolean>) => {
			state.isValid = action.payload;
		},
	},
});

export const { actions: authAction } = authSlice;
export const { reducer: authReducer } = authSlice;
