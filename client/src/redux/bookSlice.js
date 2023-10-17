import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Base_Url } from './Base_Url'
import Cookies from 'js-cookie';

function getToken() {
    return Cookies.get('authToken')
}
export const bookSlice = createApi({
    reducerPath: 'bookSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: Base_Url,
        prepareHeaders: (headers) => {
            const token = getToken()
            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['book'],
    endpoints: (builder) => ({
        getbooks: builder.query({
            query: () => {
                return {
                    url: 'books',
                    method: 'GET'
                }
            },
            providesTags: ['book']
        }),
        addbook: builder.mutation({
            query: (newBook) => (
                console.log(`newbook ${newBook}`), {
                    url: 'books',
                    method: 'POST',
                    body: newBook
                }),
            invalidatesTags: ['book']
        }),
        updatebook: builder.mutation({
            query: ({ id, newBook }) => (
                console.log('update book', newBook), {
                    url: `book/${id}`,
                    method: 'PUT',
                    body: newBook
                }),
            invalidatesTags: ['book']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `book/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['book']
        })
    })
})
export const { useGetbooksQuery, useAddbookMutation, useUpdatebookMutation, useDeleteBookMutation } = bookSlice;