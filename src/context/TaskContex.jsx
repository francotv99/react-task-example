
import { createContext,useState,useEffect } from "react"//libreria que genera el context
import {tasks as data} from '../tasks'

export const TaskContex=createContext()//nombre del contexcto

export function TaskContexprovider(props) {//componente que engloba a todos
  

  
  const [tasks,settasks]=useState([]);


  function createTask(task){
    //Esta es la forma de decir llama a todo lo del arreglo pero auemnta task
    settasks([...tasks,{
      title:task.title,//Anota el titulo del input recibido a traves del takslist
      id:tasks.length,//toma ne cuenta el numero de elemnto
      description:task.descri//La descripcion
    }]);
  
  }

  function deleteTask(taskId){
    settasks(tasks.filter(tasks=>tasks.id !=taskId))
  
  }

  useEffect(()=>{
    settasks(data)
},[])

    return (
        <>
            <TaskContex.Provider value={{
              tasks,
              deleteTask,
              createTask

            }}>
                     {props.children}
            </TaskContex.Provider>
        
        </>
  )
}


