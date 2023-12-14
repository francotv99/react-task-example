
import './App.css'

import Tasklist from './Tasklist'
import TaskForm from './TaskForm'

function App() {

  
 

  //del arrreglo Tasks se le añade un nuevo arrelo task (sin S)


//Esta es la funcion de delete que se usa para eliminar los tasks






  return (
    <main className='bg-zinc-900 h-screen'>

      <div className='container mx-auto p-10'>
        <TaskForm/>
        <Tasklist/>
      </div>
   
    </main>
  )
}

export default App

