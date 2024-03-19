/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import toastr from 'toastr';

import { successUploadToastr } from 'shared/config/toastr/toastr.config';

import { TrackBlob, TrackBlobUpdate, UploadpageSchema } from '../types/uploadpageSchema';
import { uploadingFile } from '../services/fetchUploading/fetchUploading';

const initialState: UploadpageSchema = { isLoading: false, uploading: [], error: undefined, isDragEvent: false };

export const uploadSlice = createSlice({
	name: 'uploading',
	initialState,
	reducers: {
		addNewUploading: (state, action: PayloadAction<TrackBlob>) => {
			state.uploading = [...state.uploading, action.payload];
		},
		activeDragEvent: (state) => {
			state.isDragEvent = true;
		},
		disableDragEvent: (state) => {
			state.isDragEvent = false;
		},
		updateProgressUploading: (state, action: PayloadAction<TrackBlobUpdate>) => {
			console.log(action.payload.progress);
			if (action.payload.progress === 100) {
				toastr.success(
					'Успешно загружен',
					`Трек ${state.uploading[state.uploading.length - 1]?.name}`,
					successUploadToastr
				);
			}
			state.uploading = state.uploading.map((item, index) => {
				if (index === action.payload.id) {
					item.progress = action.payload.progress;
				}
				return item;
			});
		},

		// cancelEdit: (state) => {
		// 	state.readonly = true;
		// 	state.form = state.data;
		// 	state.validateError = undefined;
		// },
		// saveEdit: (state) => {
		// 	state.readonly = true;
		// 	state.form = state.data;
		// },
		// updateProfile: (state, action: PayloadAction<Profile>) => {
		// 	state.form = {
		// 		...state.form,
		// 		...action.payload,
		// 	};
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(uploadingFile.pending, (state) => {
			state.error = '';
			state.isLoading = true;
		});
		builder.addCase(uploadingFile.fulfilled, (state) => {
			state.isLoading = false;
			// state.data = action.payload;
			// state.form = action.payload;
		});
		builder.addCase(uploadingFile.rejected, (state) => {
			state.isLoading = false;
			// state.error = action.error;
		});
		// builder.addCase(updateProfileData.pending, (state) => {
		// 	state.validateError = undefined;
		// 	state.isLoading = true;
		// });
		// builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
		// 	state.isLoading = false;
		// 	state.data = action.payload;
		// 	state.form = action.payload;
		// 	state.readonly = true;
		// 	state.validateError = undefined;
		// });
		// builder.addCase(updateProfileData.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.validateError = action.payload as ValidateProfileError[];
		// });
	},
});

export const { actions: uploadAction } = uploadSlice;
export const { reducer: uploadReducer } = uploadSlice;
