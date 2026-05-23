import { baseApi } from "@/shared/api/baseApi";
import { user } from "@/entities/user/model/types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<user, void>({
            query: () => "users/1"
        })
    })
})  

export const {useGetUserQuery} = userApi;