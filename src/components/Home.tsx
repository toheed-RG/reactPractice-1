import React from 'react';
import { Suspense } from 'react';

import Loading from '../atoms/Loading';
import TodoMolecule from '../molecules/TodoMolecule';
import AddNewTodoItem from '../atoms/Todo/AddNewTodoItem';

const Home = () => {
  return (
    <div>
      <AddNewTodoItem />
      <h1>Todo List</h1>
      <Suspense fallback={<div><Loading /></div>}>
        <TodoMolecule />
      </Suspense>
    </div>
  )
}

export default Home;
