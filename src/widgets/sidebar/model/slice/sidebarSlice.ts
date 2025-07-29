// import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// import { AlbumsCollection, fetchCommonAlbums, fetchUserAlbums } from 'entities/Album';

// import { SidebarSchema } from '../types/SidebarSchema';

// const initialState: SidebarSchema = {
// 	isLoading: true,
// 	error: undefined,
// };

// export const sidebarSlice = createSlice({
// 	name: 'sidebar',
// 	initialState,
// 	reducers: {
// 		onLoadingPage: (state) => {
// 			state.isLoading = true;
// 		},
// 		offLoadingPage: (state) => {
// 			state.isLoading = false;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder.addCase(fetchUserAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
// 			state.isLoading = false;
// 		});
// 		builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
// 			state.isLoading = false;
// 		});
// 	}
// });

// export const { actions: sidebarAction } = sidebarSlice;
// export const { reducer: sidebarReducer } = sidebarSlice;


