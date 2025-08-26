import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: (builder) => ({
		uploadAudio: builder.mutation<void, FormData>({
			query: (formData) => ({
				url: '/audio/upload',
				method: 'POST',
				body: formData,
			}),
		}),
	}),
})

export const { useUploadAudioMutation } = rtkApi

export const $api = axios.create({
	baseURL: 'http://localhost:3000/api/',
	withCredentials: true,
})
