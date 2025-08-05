import React from 'react'
import Todo from '../atoms/Todo';

const Home = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'Learn React', desc: 'Study the basics of React' },
    { id: 2, title: 'Build a Todo App', desc: 'Create a simple todo application' }
  ]);

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