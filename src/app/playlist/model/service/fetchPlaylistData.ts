import { createAsyncThunk } from "@reduxjs/toolkit";


import { ThunkConfig } from "@/app/(providers)/storeProvider/config/store";
import { Trackes } from "@/shared/api/track";

export const fetchPlaylistData = createAsyncThunk<Trackes, number, ThunkConfig<string>>('playlistPage/fetchPlaylistData',
	async (albums_id, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI;

		try {
			const res = await extra.api.get<Trackes>('/users', {
				headers: {},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	});