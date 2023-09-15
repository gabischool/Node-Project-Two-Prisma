import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_Url } from "./Base_Url";

export const blogSlice = createApi({
    reducerPath: 'blogSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: Base_Url
    }),
    tagTypes: ['blog'],
    endpoints: (builder) => ({
        getblogs: builder.query({
            query: () => {
                return {
                    url: 'blogs',
                    method: 'GET',
                }
            },
            providesTags: ['blog']
        }),
        addblogs: builder.mutation({
            query: (newBlog) => ({
                url: 'blogs',
                method: 'POST',
                body: newBlog
            }),
            invalidatesTags: ['blog']
        }),
        updateblog: builder.mutation({
            query: ({ id, updateBlog }) => ({
                url: `blog/${id}`,
                method: 'PUT',
                body: updateBlog
            }),
            invalidatesTags: ['blog']
        }),
        deleteblog: builder.mutation({
            query: (id) => ({
                url: `blog/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['blog']
        })
    })
})

export const { useGetblogsQuery, useAddblogsMutation, useUpdateblogMutation, useDeleteblogMutation } = blogSlice;