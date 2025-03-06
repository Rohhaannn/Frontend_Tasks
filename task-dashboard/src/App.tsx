import './App.css'
import TaskForm from './components/TaskForm'
import TaskTable from './components/TaskTable'

function App() {
  

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'> Task Management Dashboard </h1>
        <TaskForm/>
        <TaskTable/>
      </div>
    </>
  )
}

export default App
