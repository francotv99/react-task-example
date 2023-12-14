//Librerias para usar el context
import { useContext } from "react"
import { TaskContex } from "./context/TaskContex"//llamar



//En esta tarte es donde se agraga al html 
//el nuevo titulo y su descripcion
//ademas se a;ade un boton para eliminar lo que se agrega igual


function TaskCard({tasks}) {

    //Enn esta parte se usa el contexto para llamar a un valor 
    //sin la necesidad de pasar archivo por archivo
    const {deleteTask}=useContext(TaskContex)
    
  


  return (
    
    <div className="bg-gray-800 text-white p-4 rounded-md ">
        <h1 className="text-xl font-bold capitalize" >{tasks.title}</h1>
        <p className="text-gray-500 text-sm">{tasks.description}</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=>deleteTask(tasks.id)}>Eliminar</button>
    </div>
  )
}

export default TaskCard

 