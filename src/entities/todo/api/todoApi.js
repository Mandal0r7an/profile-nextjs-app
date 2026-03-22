import { baseApi } from "../../../shared/api/baseApi";

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodoById: builder.query({
            query: (id) => `todos/${id}`
        })
    })
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todoApi;