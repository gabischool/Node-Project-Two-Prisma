import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Base_Url } from './Base_Url'
export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: Base_Url,
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: 'user',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: ({ id, updateUser }) => ({
                url: `user/${id}`,
                method: 'PUT',
                body: updateUser
            }),
            invalidatesTags: ['user']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        }),
        getUser: builder.query({
            query: () => {
                return {
                    url: 'users',
                    method: 'GET'
                }
            },
            providesTags: ['user']
        }),
        loginUser: builder.mutation({
            query: (logData) => ({
                url: 'user/login',
                method: 'POST',
                body: logData
            }),
            onQueryStarted: async(args, { queryFulfilled }) => {
                try {
                    const data = await querlyFulfilled
                    localStorage.setItem('authToken', data.data.token);
                } catch (err) {
                    console.log('error login slice ', err.message);
                }
            },
            invalidatesTags: ['user']
        }),
        getUserAuth: builder.query({
            query: () => {
                return {
                    url: 'user',
                    method: 'GET'
                }
            },
            providesTags: ['user']
        }),
    })
})
export const { useGetUserQuery, useGetUserAuthQuery, useRegisterUserMutation, useDeleteUserMutation, useUpdateUserMutation, useLoginUserMutation } = userSlice;