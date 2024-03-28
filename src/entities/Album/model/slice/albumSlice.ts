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

			action.payload.forEach((postAlbum) => {
				const coverPlaylist = postAlbum.imagePath || getRandomCover();

				const newAlbum: AlbumInterface = {
					author: postAlbum.author,
					id: postAlbum.id,
					imagePath: coverPlaylist,
					title: postAlbum.title,
					user_id: postAlbum.user_id,
				};
				state.commonAlbums.push(newAlbum);
				state.userAlbums.push(newAlbum);
			});
		});
		builder.addCase(fetchUserAlbums.rejected, (state, action) => {
			console.log('fetchAlbums.rejected');

			state.isLoading = false;
			state.error = action.error;
		});

		builder.addCase(fetchCommonAlbums.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsPost>) => {
			state.isLoading = false;

			action.payload.forEach((postAlbum) => {
				const coverPlaylist = postAlbum.imagePath || getRandomCover();

				const newAlbum: AlbumInterface = {
					author: postAlbum.author,
					id: postAlbum.id,
					imagePath: coverPlaylist,
					title: postAlbum.title,
					user_id: postAlbum.user_id,
				};

				state.commonAlbums.push(newAlbum);
			});

			const idCommonAlbum: number = action.payload[0].id;

			const defaultCommonAlbums = getAlbumsCommonDefault(idCommonAlbum);

			defaultCommonAlbums.forEach((album) => state.commonAlbums.push(album));
		});
		builder.addCase(fetchCommonAlbums.rejected, (state, action) => {
			console.log('fetchAlbums.rejected');

			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const { actions: albumAction } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
