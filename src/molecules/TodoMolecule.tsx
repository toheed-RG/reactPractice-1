import React, { useEffect } from 'react';
import { Button } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from '../atoms/Todo';
import Loading from '../atoms/Loading';
import { fetchTodos } from '../store/thunks/todo';
import { AppDispatch, RootState } from '../store';
import { clearTodos, } from '../store/slices/todo';
import { useFetchTodosQuery } from '../store/api/todos';
import { toast } from 'react-toastify';

const TodoMolecule = () => {
    // const { todos, status, error } = useSelector((state: RootState) => state.todo);
    const dispatch: AppDispatch = useDispatch();
    const { data: todos, isLoading, isSuccess, isError, error, refetch } = useFetchTodosQuery();

    function handleFetch() {
        dispatch(fetchTodos());
    }
    useEffect(() => {
        if (isLoading) {
            console.log('Fetching todos...');
        } else if (isSuccess) {
            toast.success("Todos Loaded Successfully");
        }
        else if (isError) {
            toast.error("Todos loading failed!");
            console.error(`Failed to fetch todos: ${error}`);
        }
        console.log("compoent reloaded");
    }, [isLoading, isSuccess, isError]);

    if (isLoading) {
        console.log('Rendering: Loading component');
        return <Loading text='Fetching Todos ... ' />;
    }

    return (
        <>
            {isSuccess && (todos?.map(todo => { return <Todo key={todo.id} todo={todo} /> }))}
            {isError && (
                <div>
                    <p>Error: {error}</p>
                    <Button type='button' variation='primary' onClick={() => dispatch(fetchTodos())}>
                        Try Again
                    </Button>
                </div>
            )}
            <div>
                <Button type='button' variation='primary' onClick={() => dispatch(clearTodos())}>
                    Clear Todos
                </Button>
                <Button type='button' variation='primary' onClick={() => refetch()}>
                    Fetch Todos
                </Button>
            </div >
        </>
    )
}

export default TodoMolecule;