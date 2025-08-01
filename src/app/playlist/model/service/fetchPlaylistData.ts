import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/shared/api/rtkApi";
import { Trackes } from "@/shared/api/track";

export const fetchPlaylistData = createAsyncThunk<Trackes, number, ThunkConfig<string>>('playlistPage/fetchPlaylistData',
	async (albums_id, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI;

		try {
			const res = await extra.api.get<Trackes>('/user', {
				headers: {
					withCredentials: true,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
				},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	});