import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';
import { API_URL } from 'app/config';
import axios from 'axios';
import { TrackBlob } from '../../types/uploadingSchema';

export const uploadingFile = createAsyncThunk<Track, File, ThunkConfig<string>>('uploading/uploadingFile', async (file, thunkAPI) => {
	const { rejectWithValue, extra, dispatch } = thunkAPI;
	try {
		console.log(file);
		let formData = new FormData();
		formData.append('audio', file);

		const response = await axios.post(`${API_URL}tracks`, formData, {
			// headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			// onUploadProgress: (progressEvent) => {
			// 	const totalLength = progressEvent.lengthComputable
			// 		? progressEvent.total
			// 		: progressEvent.target.getResponseHeader('content-length') ||
			// 			progressEvent.target.getResponseHeader('x-decompressed-content-length');
			// 	console.log('total', totalLength);
			// 	if (totalLength) {
			// 		uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength);
			// 		dispatch(changeUploadFile(uploadFile));
			// 	}
			// },
		});
		// dispatch(addFile(response.data));
		// const res = await extra.api.get<TrackBlob[]>(`/articles`, {
		// 	params: {
		// 		_expand: 'user',
		// 	},
		// });
		// if (!res.data) {
		// 	throw new Error();
		// }
	} catch (error) {
		return rejectWithValue('error');
	}
});
