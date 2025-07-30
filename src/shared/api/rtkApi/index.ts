import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '../../const/localstorage';

import axios from 'axios';


export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "__API__",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});

export const $api = axios.create({
	baseURL: "__API__",
	withCredentials: true,
	// headers: {
	// 	Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
	// },
});
