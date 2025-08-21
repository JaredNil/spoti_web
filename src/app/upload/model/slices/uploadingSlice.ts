import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	TrackBlob,
	TrackBlobUpdate,
	UploadpageSchema,
} from '../types/uploadpageSchema'

const initialState: UploadpageSchema = {
	isLoading: false,
	uploading: [],
	error: undefined,
	isDragEvent: false,
}

export const uploadSlice = createSlice({
	name: 'uploading',
	initialState,
	reducers: {
		addNewUploading: (state, action: PayloadAction<TrackBlob>) => {
			state.uploading = [...state.uploading, action.payload]
		},
		activeDragEvent: (state) => {
			state.isDragEvent = true
		},
		disableDragEvent: (state) => {
			state.isDragEvent = false
		},
		updateProgressUploading: (
			state,
			action: PayloadAction<TrackBlobUpdate>
		) => {
			console.log(action.payload.progress)
			if (action.payload.progress === 100) {
				// toastr.success(
				// 	'Успешно загружен',
				// 	`Трек ${state.uploading[state.uploading.length - 1]?.name}`,
				// 	successUploadToastr
				// );
			}
			state.uploading = state.uploading.map((item, index) => {
				if (index === action.payload.id) {
					item.progress = action.payload.progress
				}
				return item
			})
		},
	},
	extraReducers: (builder) => {
		// builder.addCase(uploadingFile.pending, (state) => {
		// 	state.error = '';
		// 	state.isLoading = true;
		// });
		// builder.addCase(uploadingFile.fulfilled, (state) => {
		// 	state.isLoading = false;
		// 	// state.data = action.payload;
		// 	// state.form = action.payload;
		// });
		// builder.addCase(uploadingFile.rejected, (state) => {
		// 	state.isLoading = false;
		// 	// state.error = action.error;
		// });
	},
})

export const { actions: uploadAction } = uploadSlice
export const { reducer: uploadReducer } = uploadSlice
