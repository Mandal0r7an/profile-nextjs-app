import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/baseApi";
import { userApi } from "../../entities/user/api/userApi";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})