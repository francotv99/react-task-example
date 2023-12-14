
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContex } from "./context/TaskContex";


export default function Tasklist() {

    const {tasks} =useContext(TaskContex)

    if (tasks.length===0)
    {
        return <h1 className="text-white font-bold text-4x1 text-center ">No hay tareas aun</h1>
    }



  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tasks)=>(
        <TaskCard key={tasks.id} tasks={tasks} />
      ))}
    </div>
  );
}
