import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrackBlob, UploadPageSchema } from '../types/uploadingSchema';

const initialState: UploadPageSchema = { isLoading: false, uploading: [], error: undefined };

export const uploadingSlice = createSlice({
	name: 'uploading',
	initialState,
	reducers: {
		addNewUploading: (state, action: PayloadAction<string>) => {
			state.uploading = [...state.uploading, { name: action.payload, progress: 0 }];
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
		// builder.addCase(fetchProfileData.pending, (state) => {
		// 	state.error = '';
		// 	state.isLoading = true;
		// });
		// builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
		// 	state.isLoading = false;
		// 	state.data = action.payload;
		// 	state.form = action.payload;
		// });
		// builder.addCase(fetchProfileData.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.error;
		// });
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

export const { actions: uploadingAction } = uploadingSlice;
export const { reducer: uploadingReducer } = uploadingSlice;
