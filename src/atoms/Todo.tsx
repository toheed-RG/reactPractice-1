import React from 'react'

const Todo = ({ todo }) => {
    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: 'snow', paddingTop: '5px', paddingBottom: '5px', margin: '10px' }}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div >
        </>
    )
}

export default Todo