import { baseApi } from "@/shared/api/baseApi";
import { User } from "@/entities/user/model/types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            query: () => "users/1"
        })
    })
})

export const {useGetUserQuery} = userApi;