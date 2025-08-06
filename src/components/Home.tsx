import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearTodos } from '../store/slices/todo';

import Todo from '../atoms/Todo';
import AddNewTodoItem from '../atoms/Todo/AddNewTodoItem';

const Home = () => {
  const { todos, status, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'loading') {
      console.log('Loading todos...');
    } else if (status === 'failed') {
      console.error('Error fetching todos:', error);
    }
  }, [dispatch, todos]);

  return (
    <div>
      <AddNewTodoItem />
      <h2>Todo List</h2>
      {todos.map(todo => { return <Todo key={todo.id} todo={todo} /> })}
      <button type='button' onClick={() => dispatch(clearTodos())}>
        Clear Todos
      </button>
    </div>
  )
}

export default Home;
