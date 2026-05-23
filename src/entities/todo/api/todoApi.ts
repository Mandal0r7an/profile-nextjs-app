import { baseApi } from "@/shared/api/baseApi";
import { Todo } from "@/entities/todo/model/types";

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => 'todos?_limit=10'
        }),
        getTodoById: builder.query<Todo, string>({
            query: (id) => `todos/${id}`
        })
    })
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todoApi;