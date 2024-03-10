import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';

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
	// extraReducers: (builder) => {
	// 	builder.addCase(loginByUsername.pending, (state) => {
	// 		state.error = undefined;
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(loginByUsername.fulfilled, (state) => {
	// 		state.isLoading = false;
	// 	});
	// 	builder.addCase(loginByUsername.rejected, (state, action) => {
	// 		state.isLoading = false;
	// 		state.error = action.error;
	// 	});
	// },
});

export const { actions: authAction } = authSlice;
export const { reducer: authReducer } = authSlice;
