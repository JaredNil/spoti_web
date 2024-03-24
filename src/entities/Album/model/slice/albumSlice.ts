import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlbumsSchema, AlbumsPost } from '../types/albumsSchema';
import { AlbumInterface } from '../types/album';
import { fetchAlbums } from '../service/fetchAlbums';
import { getRandomCover } from '../service/getRandomCover';

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
		builder.addCase(fetchAlbums.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAlbums.fulfilled, (state, action: PayloadAction<AlbumsPost>) => {
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
		builder.addCase(fetchAlbums.rejected, (state, action) => {
			console.log('fetchAlbums.rejected');

			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const { actions: albumAction } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
