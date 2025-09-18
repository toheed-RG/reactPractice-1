import { configureStore } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { todoReducer } from "./slices/todo";
import { fetchTodos } from "./thunks/todo";
import { todoApi } from "./api/todos";

const toastMiddleware = () => (next: any) => (action: any) => {
    const result = next(action);
    if (fetchTodos.fulfilled.match(action)) {
        toast.success('Todos loaded successfully');
    } else if (fetchTodos.rejected.match(action)) {
        toast.error(action.error?.message || 'Failed to load todos');
    }
    return result;
};

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    // middleware: (getDefault) => getDefault().concat(toastMiddleware)
    middleware: (getDefault) => getDefault().concat(todoApi.middleware)
});

// include a typed dispatch, which is essential for making async actions work correctly 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;