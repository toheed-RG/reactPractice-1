import React, { useContext } from 'react';
import Todo from '../atoms/Todo';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Todo List</h2>
      {
        todos.length === 0 ? <p>No Todos Available</p> :
          todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })
      }
      <button onClick={clearTodos} className='btn btn-primary'>
        Clear Todos
      </button>
    </div>
  )
}

export default Home;
