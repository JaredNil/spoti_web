import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { authByCookie } from '../service/AuthByCookie';

const initialState: AuthSchema = {
	isLoading: false,
	password: '',
	isValid: false,
	username: '',
	error: undefined,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setVaild: (state, action: PayloadAction<boolean>) => {
			state.isValid = action.payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { actions: authAction } = authSlice;
export const { reducer: authReducer } = authSlice;
