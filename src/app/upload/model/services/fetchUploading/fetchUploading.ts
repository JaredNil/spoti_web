// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { API_URL } from 'app/config';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import axios from 'axios';
// import { Track } from 'entities/Track';

// export const uploadingFile = createAsyncThunk<{ artist: string, title: string, idDb: string }, FileList, ThunkConfig<string>>('uploading/uploadingFile', async (files, thunkAPI) => {
// 	const { rejectWithValue, dispatch } = thunkAPI;
// 	try {
// 		console.log({ audio: files[0] });

// 		const formData = new FormData();
// 		formData.append('audio', files[0]);

// 		const response = await axios.post(
// 			`${API_URL}tracks`,
// 			{ audio: files[0] },
// 			{
// 				headers: {
// 					'Content-Type': 'application/json',
// 					'Access-Control-Allow-Origin': '*',
// 					withCredentials: true,
// 					crossOrigin: true,
// 					// Authorization: `Bearer ${localStorage.getItem('token')}`
// 				},
// 				// onUploadProgress: (progressEvent) => {
// 				// 	const totalLength = progressEvent.progress
// 				// 		? progressEvent.total
// 				// 		: progressEvent.event.getResponseHeader('content-length') ||
// 				// 			progressEvent.event.getResponseHeader(
// 				// 				'x-decompressed-content-length'
// 				// 			);
// 				// 	console.log('total', totalLength);
// 				// 	if (totalLength) {
// 				// 		let progress = Math.round((progressEvent.loaded * 100) / totalLength);
// 				// 		console.log(progress);
// 				// 		// dispatch(changeUploadFile(progress));
// 				// 	}
// 				// },
// 			}
// 		);

// 		console.log(response.data);
// 		// dispatch(addFile(response.data));

// 		// const res = await extra.api.get<TrackBlob[]>(`/articles`, {
// 		// 	params: {
// 		// 		_expand: 'user',
// 		// 	},
// 		// });

// 		if (!response.data) {
// 			throw new Error();
// 		}
// 		return { artist: 'dsa', title: 'string', idDb: 'string' };
// 	} catch (error) {
// 		return rejectWithValue('error');
// 	}
// });
