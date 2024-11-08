import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlbumsSchema } from '../types/albumsSchema';
import { AlbumInterface, AlbumsCollection } from '../types/album';
import { fetchUserAlbums } from '../service/fetchUserAlbums';
import { getRandomCover } from '../service/getRandomCover';
import { fetchCommonAlbums } from '../service/fetchCommonAlbums';

const initialState: AlbumsSchema = {
	isLoading: true,
	error: '',
	commonAlbums: [],
	userAlbums: [],
};

export const albumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUserAlbums.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchUserAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
			state.isLoading = false;
			state.userAlbums = []

			action.payload.forEach((postAlbum) => {
				const coverPlaylist = postAlbum.imagePath || getRandomCover();

				const newAlbum: AlbumInterface = {
					author: postAlbum.author,
					id: postAlbum.id,
					imagePath: coverPlaylist,
					title: postAlbum.title,
					user_id: postAlbum.user_id,
					trackes_id: postAlbum.trackes_id

				};
				state.userAlbums.push(newAlbum);
			});
		});
		builder.addCase(fetchUserAlbums.rejected, (state, action) => {

			state.isLoading = false;
			state.error = action.error;
		});

		builder.addCase(fetchCommonAlbums.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
			state.isLoading = false;
			state.commonAlbums = []
			action.payload.forEach((postAlbum) => {

				const newAlbum: AlbumInterface = {
					author: postAlbum.author,
					id: postAlbum.id,
					imagePath: postAlbum.imagePath,
					title: postAlbum.title,
					user_id: postAlbum.user_id,
					trackes_id: postAlbum.trackes_id
				};

				state.commonAlbums.push(newAlbum);
			});

		});
		builder.addCase(fetchCommonAlbums.rejected, (state, action) => {
			console.log('fetchCommonAlbums.rejected');

			state.isLoading = false;
			state.error = 'Ошибка загрузки данных. Перезагрузите страницу или попробуйте позже.';
		});
	},
});

export const { actions: albumAction } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
