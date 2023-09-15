// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { Base_Url } from "./Base_Url";
// import Cookies from "js-cookie";
// const getToken = () => {
//     return Cookies.get('token');
// }
// export const authSlice = createApi({
//     reducerPath: 'authSlice',
//     baseQuery: fetchBaseQuery({
//         baseUrl: Base_Url,
//         prepareHeaders: (Headers) => {
//             const token = getToken();
//             if (token) {
//                 Headers.set("Authorization", `Bearer ${token}`);
//             }
//             return Headers;
//         }
//     }),
//     tagTypes: ['auth'],
//     endpoints: (builder) => ({
//         getUserAuth: builder.query({
//             query: () => {
//                 return {
//                     url: 'userInfo',
//                     method: 'GET'
//                 }
//             },
//             providesTags: ['user']
//         }),
//     })
// })
// export const { useGetUserAuthQuery } = authSlice