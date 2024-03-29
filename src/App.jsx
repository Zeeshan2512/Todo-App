import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


function App() {
  return (
    <>
      {/* Display the title */}
      <h1 className='flex justify-around py-5 text-3xl font-bold bg-green-600 text-white'>Todo App</h1>

      {/* Main content container */}
      <div className='xl:w-[50%] w-full  bg-green-300 mx-auto p-3 m-2 rounded-xl min-h-[80vh]'>
        {/* Subtitle */}
        <h2 className='md:px-2 pt-1 pb-3 text-center font-bold text-3xl'>Manage all of your tasks at one place</h2>
        
        {/* Horizontal line for separation*/}
        <div className='border-black border-2 my-3 w-[90%] mx-auto opacity-30'></div>
        
        {/* Todo section */}
        <div>
          {/* Add Todo title */}
          <div className='font-bold text-2xl py-2'>Add a Todo</div>
          
          {/* AddTodo component */}
          <AddTodo/>
          
          {/* TodoList component */}
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default App
