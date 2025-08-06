import { Button } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import Todo from '../atoms/Todo';
import Loading from '../atoms/Loading';
import { fetchTodos } from '../store/thunks/todo';
import { AppDispatch, RootState } from '../store';
import { clearTodos, } from '../store/slices/todo';

const TodoMolecule = () => {
    const { todos, status, error } = useSelector((state: RootState) => state.todo);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        if (status === 'idle') {
            console.log('Fetching todos...');
            dispatch(fetchTodos());
        }
        if (status === 'succeeded') {
            console.log(`Todos fetched: ${status}`);
        }
        if (status === 'failed') {
            console.error(`Failed to fetch todos: ${error}`);
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading text='Fetching Todos ... ' />;
    }

    return (
        <>
            {status === 'succeeded' && todos.map(todo => { return <Todo key={todo.id} todo={todo} /> })}
            {status === 'failed' && <p>Error: {error}</p>}
            <div>
                <Button type='button' variation='primary' onClick={() => dispatch(clearTodos())}>
                    Clear Todos
                </Button>
                <Button type='button' variation='primary' onClick={() => dispatch((fetchTodos()))} style={{ marginLeft: '1rem' }}>
                    Refresh Todos
                </Button>
            </div>
        </>
    )
}

export default TodoMolecule;