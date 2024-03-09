import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlbumSchema } from '../types/albumSchema';
import { AlbumInterface } from '../types/album';

const initialState: AlbumSchema = {
	isLoading: true,
	error: undefined,
	commonAlbums: [
		{
			id: '1',
			user_id: '1',
			author: 'JaredN',
			title: 'First playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e02f2133fc8964b505a08e5d4a3',
		},
		{
			id: '2',
			user_id: '2',
			author: 'JaredN',
			title: 'Second playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019',
		},
		{
			id: '3',
			user_id: '3',
			author: 'JaredN',
			title: 'Third playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e02bd5aa8f695dffd8ae83ff2e9',
		},
	],
	userAlbums: [
		{
			id: '1',
			user_id: '1',
			author: 'JaredN',
			title: 'First playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e02f2133fc8964b505a08e5d4a3',
		},
		{
			id: '2',
			user_id: '2',
			author: 'JaredN',
			title: 'Second playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019',
		},
		{
			id: '3',
			user_id: '3',
			author: 'JaredN',
			title: 'Third playlist',
			href: 'string',
			imagePath: 'https://i.scdn.co/image/ab67616d00001e02bd5aa8f695dffd8ae83ff2e9',
		},
	],
};

export const albumSlice = createSlice(
	{
		name: 'album',
		initialState,
		reducers: {
			initAlbumsData: (state, action: PayloadAction<Partial<AlbumSchema>>) => {
				const newAlbum = {
					isLoading: false,
					commonAlbums: [...action.payload.commonAlbums],
					userAlbums: [...action.payload.userAlbums],
					error: action.payload.error,
				};
				return newAlbum;
			},
			update: (state) => {
				console.log('update');
			},
		},

		// setAuthData: (state, action: PayloadAction<User>) => {
		// 	state.authData = action.payload;
		// },
		// initAuthData: (state) => {
		// 	const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
		// 	if (user) {
		// 		state.authData = JSON.parse(user);
		// 	}
		// 	state._inited = true;
		// },
		// logout: (state) => {
		// 	state.authData = undefined;
		// 	localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		// },
	}
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchArticleById.pending, (state) => {
	// 		state.error = undefined;
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(fetchArticleById.fulfilled, (state, action) => {
	// 		state.isLoading = false;
	// 		state.data = action.payload;
	// 	});
	// 	builder.addCase(fetchArticleById.rejected, (state, action) => {
	// 		state.isLoading = false;
	// 		state.error = action.error;
	// 	});
	// },
);

export const { actions: albumAction } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
