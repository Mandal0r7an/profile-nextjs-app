import { baseApi } from "../../../shared/api/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "users/1"
        })
    })
})  

export const {useGetUserQuery} = userApi;