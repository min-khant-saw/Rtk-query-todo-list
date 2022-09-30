import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodoApi = createApi({
  reducerPath: "todo-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => `/posts`,
      providesTags: ["Todos"],
      transformResponse: (todo) => todo.sort((a, b) => b.id - a.id),
    }),
    addTodo: build.mutation({
      query: (post) => ({
        url: `/posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = TodoApi;
