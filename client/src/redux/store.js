import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { bookSlice } from './bookSlice';
import { blogSlice } from './blogSlice';
export const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer,
        [bookSlice.reducerPath]: bookSlice.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware)
        .concat(bookSlice.middleware).concat(blogSlice.middleware)
})
setupListeners(store.dispatch);