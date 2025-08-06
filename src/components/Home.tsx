import React from 'react';
import { Suspense } from 'react';

import Loading from '../atoms/Loading';
const TodoMolecule = React.lazy(() => import('../molecules/TodoMolecule'));
import AddNewTodoItem from '../atoms/Todo/AddNewTodoItem';

const Home = () => {
  return (
    <div>
      <AddNewTodoItem />
      <h1>Todo List</h1>
      <Suspense fallback={<div><Loading text='Loading Todo ...' /></div>}>
        <TodoMolecule />
      </Suspense>
    </div>
  )
}

export default Home;
