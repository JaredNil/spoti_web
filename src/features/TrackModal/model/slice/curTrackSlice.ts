import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurTrackSchema } from '../types/CurTrack';

const initialState: CurTrackSchema = {
	artist: 'JaredN',
	track: 'Smth Track',
	picture: 'https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019',
	audio: 'Smth Track',
	albumId: 45,
};

export const curTrackSlice = createSlice({
	name: 'curTrack',
	initialState,
	reducers: {},
});

export const { actions: curTrackAction } = curTrackSlice;
export const { reducer: curTrackReducer } = curTrackSlice;
