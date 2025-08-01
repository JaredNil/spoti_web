import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosInstance } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { USER_LOCALSTORAGE_KEY } from '../../const/localstorage';

import { StateSchema } from '@/shared/lib/state';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/",
        // prepareHeaders: (headers) => {
        //     const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
        //     if (token) {
        //         headers.set('Authorization', token);
        //     }
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({}),
});

export const $api = axios.create({
	baseURL: "http://localhost:3000/api/",
	withCredentials: true,
	// headers: {
	// 	Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
	// },
});

