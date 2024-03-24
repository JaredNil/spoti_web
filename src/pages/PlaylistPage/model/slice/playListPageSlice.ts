import { createSlice } from '@reduxjs/toolkit';
import { PlayListPageSchema } from '../types/PlayListPageSchema';

const initialState: PlayListPageSchema = {
	isLoadingData: true,
	error: '',
};

export const playListPageSlice = createSlice({
	name: 'playlistpage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const { actions: playListPageAction } = playListPageSlice;
export const { reducer: playListPageReducer } = playListPageSlice;
