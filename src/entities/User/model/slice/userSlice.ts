/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
	authData: {
		id: '0',
		username: 'global',
	},
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			state.authData = {
				id: '0',
				username: 'global',
			};
			state._inited = true;
		},
		logout: (state) => {
			state.authData = {
				id: '0',
				username: 'global',
			};
		},
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
