import { createApi } from "@reduxjs/toolkit/query/react";
import type { Todo } from '../../constants/lib/todo';

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: async () => {
        const shouldFail = Math.random() < 0.2;
        await new Promise(r => setTimeout(r, 3000));
        if (shouldFail) {
            throw new Error("failed to fetch the todos");
        } else {
            const { DEFAULT_TODOS } = await import('../../constants/lib/todo');
            return { data: DEFAULT_TODOS };
        }
    },
    endpoints: (builder) => ({
        fetchTodos: builder.query<Todo[], void>({
            query: () => '',
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (e) {
                    console.log("query not succeeded");
                }
            }
        })
    })
});

export const { useFetchTodosQuery } = todoApi;