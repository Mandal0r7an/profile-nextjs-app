import { baseApi } from "../../../shared/api/baseApi";

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos?_limit=10'
        }),
        getTodoById: builder.query({
            query: (id) => `todos/${id}`
        })
    })
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todoApi;