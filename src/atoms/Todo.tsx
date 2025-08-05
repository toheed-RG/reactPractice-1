import React from 'react'

const Todo = ({ todo }) => {
    return (
        <>
            <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                <div className="todo">
                    {todo.title}
                </div>
                <div className="todo">
                    {todo.desc}
                </div>

            </div >
        </>
    )
}

export default Todo