import { Button } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import React, { startTransition, useEffect } from 'react';

import Todo from '../atoms/Todo';
import Loading from '../atoms/Loading';
import { fetchTodos } from '../store/thunks/todo';
import { AppDispatch, RootState } from '../store';
import { clearTodos, } from '../store/slices/todo';
import AddNewTodoItem from '../atoms/Todo/AddNewTodoItem';

const Home = () => {
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

  return (
    <div>
      <AddNewTodoItem />
      <h2>Todo List</h2>
      {status === 'loading' && <div><Loading /></div>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && todos.map(todo => { return <Todo key={todo.id} todo={todo} /> })}
      <div>
        <Button type='button' variation='primary' onClick={() => dispatch(clearTodos())}>
          Clear Todos
        </Button>
        <Button type='button' variation='primary' onClick={() => dispatch((fetchTodos()))} style={{ marginLeft: '1rem' }}>
          Refresh Todos
        </Button>
      </div>
    </div>
  )
}

export default Home;
