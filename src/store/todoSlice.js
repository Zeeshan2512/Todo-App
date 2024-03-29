// Import necessary libraries and components
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load todos from local storage or use initial state
const initialState = {
  // Try to load todos from local storage, if not available, use an empty array
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

// Create a Redux slice for todos
export const TodoSlice = createSlice({
  name: 'todo', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for adding a todo
    addTodo: (state, action) => {
      // Create a new todo
      const todo = {
        id: nanoid(), // Generate a unique id
        text: action.payload, // Use the payload as the text
        isCompleted: false, // Initial completion status is false
      }
      // Add the new todo to the state
      state.todos.push(todo);
      // Save the updated todos to local storage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    // Reducer for removing a todo
    removeTodo: (state, action) => {
      // Filter out the todo with the matching id
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      // Save the updated todos to local storage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    // Reducer for toggling the completion status of a todo
    toggleComplete: (state, action) => {
      // Find the index of the todo with the matching id
      let ind = state.todos.findIndex(todo => {
        return todo.id === action.payload;
      })
      // Toggle the completion status of the todo
      state.todos[ind].isCompleted = !state.todos[ind].isCompleted;
      // Save the updated todos to local storage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  }
})

// Export the actions and reducer
export const { addTodo, removeTodo, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
