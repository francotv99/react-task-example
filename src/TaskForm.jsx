import { useState , useContext} from "react";
import { TaskContex } from "./context/TaskContex";


function TaskForm() {
  //guardara lo que se colcoa en el input
  const [title, settitle] = useState("");
  //Este servira para guardar los datos de la descripcion
  const [descri, setdescription] = useState("");



//Se hace la prueba en esta parte del llamado al contexto

   const {createTask}= useContext(TaskContex)



  const handleSubmit = (e) => {
    e.preventDefault();
    /*const newtask={
            title,
            id:4,
            description:"Algo nuevo"
        }*/

    //console.log(newtask)
    createTask({ title, descri });
    //limpia las ventanillas en los estados
    settitle("");
    setdescription("");
  };

  //Esta es una forma de de arbol de componentes
  //Del cual guarda datos y envia resultados
  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 " >
      <h1 className="text-2x1 font-bold text-white mb-3" >Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
      />

      <textarea
        placeholder="Escribe descripcion"
        onChange={(e) => setdescription(e.target.value)}
        value={descri}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button
      className="bg-indigo-500 px-3 py-1 ">Guardar</button>
      
    </form>

   </div>
  );
}

export default TaskForm;
