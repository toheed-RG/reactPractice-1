export interface Todo {
    id: number,
    title: string;
    desc: string;
}

export const DEFAULT_TODOS: Todo[] = [
    { id: 1, title: 'Learn React', desc: 'Study the basics of React' },
    { id: 2, title: 'Build a Todo App', desc: 'Create a simple todo application' },
    { id: 3, title: 'Learn Redux', desc: 'Understand state management with Redux' },
    { id: 4, title: 'Explore TypeScript', desc: 'Get familiar with TypeScript features' }
];