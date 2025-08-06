import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todo";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

// include a typed dispatch, which is essential for making async actions work correctly 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;