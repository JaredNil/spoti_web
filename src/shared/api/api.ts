import { S3Client } from '@aws-sdk/client-s3'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	tagTypes: ['Album', 'Track'],
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

export const s3 = new S3Client({
	endpoint: process.env.VK_ENDPOINT!,
	region: 'ru-1',
	credentials: {
		accessKeyId: process.env.VK_CLIENT!,
		secretAccessKey: process.env.VK_SECRET!,
	},
})
