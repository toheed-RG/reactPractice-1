import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo, DEFAULT_TODOS } from "../../constants/lib/todo";

// thunk will automatically manage the promise creation and resolution
export const fetchTodos = createAsyncThunk<Todo[]>(
    'todos/fetchTodos',
    async () => {
        // return new Promise((resolve, reject) => {});
        return new Promise(resolve => {
            const shouldFail = Math.random() < 0.2; // 20% chance to fail
            setTimeout(() => {
                if (!shouldFail) {
                    resolve(DEFAULT_TODOS);
                } else {
                    throw new Error('Failed to fetch the todos');
                }
            }, 3000);
        });
    });