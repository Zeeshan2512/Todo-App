import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'


const AddTodo = () => {
    // Using useState hook to manage the input state
    const [input, setinput] = useState('')
    
    // Using useDispatch hook to dispatch actions
    const dispatch = useDispatch()

    // Define the addTodoHandler function
    const addTodoHandler = (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault();
        
        // Dispatch the addTodo action with the current input value
        dispatch(addTodo(input));
        
        // Reset the input value to empty
        setinput('');
    }


    return (
        <div>
            {/* Initiating Form for adding a todo */}
            <form 
                onSubmit={addTodoHandler}
                className='space-x-3 mt-4 flex'
            >
                {/* Input field for the todo text */}
                <input 
                    type="text"
                    className='rounded-full w-full py-2 px-5 outline-none'
                    placeholder='Enter a Todo...'
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />

                {/* Submit button for the form */}
                <button
                    type='submit'
                    className='rounded-full py-2 px-3 bg-green-800 text-white font-bold'
                >
                    Add
                </button>

            </form>
        </div>
    )
}


export default AddTodo
