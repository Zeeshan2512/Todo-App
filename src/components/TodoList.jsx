import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleComplete } from '../store/todoSlice'
import { AiFillDelete } from "react-icons/ai";

// Define icon styles
const iconStyles = { pointerEvents: 'none' };


const TodoList = () => {
    // Using RTK hooks to get todos from state and dispatch actions
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            {/* Display the title */}
            <h2 className='font-bold text-2xl py-2'>Your Todos</h2>
            
            {/* Display a message if there are no todos */}
            {todos.length === 0 && <div className='py-3'>NO TASKS AS OF NOW</div>}
            
            {/* Map over the todos and create a div for each one */}
            {todos.map(todo => {
                return (
                    <div key={todo.id} className='w-full flex justify-between py-1'>

                        {/* Checkbox and todo text code starts from here */}
                        <div className='todo max-w-[75%] flex  '>
                            {/* Checkbox toggling code to toggle completion of todo */}
                            <input onChange={() => dispatch(toggleComplete(todo.id))} name={todo.id} className='mx-1' checked={todo.isCompleted} type="checkbox" />
                            
                            {/* Displaying todo text along with line-through property to show whether is completed or not*/}
                            <div className={`text mx-1 h-full break-words overflow-ellipsis ${todo.isCompleted ? "line-through" : ""}`} >{todo.text}</div>
                        </div>
                        
                        {/* Delete button */}
                        <div className='flex gap-2 h-full max-w-[25%]'>
                            <button onClick={() => dispatch(removeTodo(todo.id))} name={todo.id} className='bg-green-800 px-2 py-1 rounded-xl text-white'><AiFillDelete style={iconStyles} /></button>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default TodoList
