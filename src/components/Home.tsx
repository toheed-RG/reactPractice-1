import React from 'react';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@aws-amplify/ui-react';

import Loading from '../atoms/Loading';
import { AppDispatch } from '../store';
import { fetchTodos } from '../store/thunks/todo';
import AddNewTodoItem from '../atoms/Todo/AddNewTodoItem';

const TodoMolecule = React.lazy(() => import('../molecules/TodoMolecule'));

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <AddNewTodoItem />
      <h1>Todo List</h1>
      <TodoMolecule />
      <div style={{ marginTop: '1rem' }}>
        <Button type='button' variation='primary' onClick={() => dispatch((fetchTodos()))} style={{ marginLeft: '1rem' }}>
          Refresh Todos
        </Button>
      </div>
    </div>
  )
}

export default Home;
