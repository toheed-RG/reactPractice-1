import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addTodo } from '../../store/slices/todo';

const AddNewTodoItem = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState({ title: '', desc: '' });

    const handleAddTodo = (e) => {
        e.preventDefault(); // to prevent the default behavior of the form
        if (newTodo.title.trim() && newTodo.desc.trim()) {
            dispatch(addTodo({
                id: Date.now(),
                ...newTodo
            }));
            setNewTodo({ title: '', desc: '' });
        }
    };
    return (
        <>
            <h1>Add a NEW Todo Item</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Todo Title"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Todo Description"
                    value={newTodo.desc}
                    onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default AddNewTodoItem;