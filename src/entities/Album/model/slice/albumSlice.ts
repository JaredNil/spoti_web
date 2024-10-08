import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAlbumsCommonDefault } from 'shared/const/albumCommonDefault';
import { AlbumsSchema, AlbumsPost } from '../types/albumsSchema';
import { AlbumInterface } from '../types/album';
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
		builder.addCase(fetchUserAlbums.fulfilled, (state, action: PayloadAction<AlbumsPost>) => {
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
		builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsPost>) => {
			state.isLoading = false;
			state.commonAlbums = []
			action.payload.forEach((postAlbum) => {

				const newAlbum: AlbumInterface = {
					author: postAlbum.author,
					id: postAlbum.id,
					imagePath: postAlbum.imagePath,
					title: postAlbum.title,
					user_id: postAlbum.user_id,
				};

				state.commonAlbums.push(newAlbum);
			});

			if (action.payload[0].id) {
				const idCommonAlbum: number = action.payload[0].id;

				const defaultCommonAlbums = getAlbumsCommonDefault(idCommonAlbum);

				defaultCommonAlbums.forEach((album) => state.commonAlbums.push(album));
			}
		});
		builder.addCase(fetchCommonAlbums.rejected, (state, action) => {
			console.log('fetchCommonAlbums.rejected');

			state.isLoading = false;
			state.error = 'Ошибка загрузки данных. Перезагрузите страницу или попробуйте позже.';
			const defaultCommonAlbums = getAlbumsCommonDefault(-1);

			defaultCommonAlbums.forEach((album) => state.commonAlbums.push(album));
		});
	},
});

export const { actions: albumAction } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
