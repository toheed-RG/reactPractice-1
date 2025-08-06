import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    todos: [
        { id: 1, title: 'Learn React', desc: 'Study the basics of React' },
        { id: 2, title: 'Build a Todo App', desc: 'Create a simple todo application' },
        { id: 3, title: 'Learn Redux', desc: 'Understand state management with Redux' },
        { id: 4, title: 'Explore TypeScript', desc: 'Get familiar with TypeScript features' }
    ],
    status: "idle",
    error: null
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState: DEFAULT_STATE,
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
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

// exported both actions and reducers
export const { addTodo, removeTodo, clearTodos, setStatus, setError } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const selectTodos = (state) => state.todos;
