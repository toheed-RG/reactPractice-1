import React, { createContext, useState, ReactNode } from "react";

// Create a new context for Todos
interface Todo {
    id: number;
    title: string;
    desc: string;
}

interface TodoContextType {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    setTodos: () => { },
});

// Create a provider for the TodoContext
export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: 'Learn React', desc: 'Study the basics of React' },
        { id: 2, title: 'Build a Todo App', desc: 'Create a simple todo application' }
    ]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
