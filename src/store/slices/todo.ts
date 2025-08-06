import { fetchTodos } from "../thunks/todo";
import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../constants/lib/todo";

interface TodoState {
    todos: Todo[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
}

const InitialTodos: TodoState = {
    todos: [],
    status: 'idle',
    error: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: InitialTodos,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        clearTodos: (state) => {
            state.todos = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            });
    }
})

// exported both actions and reducers
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const selectTodos = (state: { todo: TodoState }) => state.todo.todos;
