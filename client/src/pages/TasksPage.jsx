import { useAuth } from "../context/authContext"
import { useEffect } from "react";
import useFormContext from "../hook/useFormContext"
import TaskCard from "../components/TaskCard"

function TasksPage(){

    const{getTasks, tasks} = useFormContext();


    useEffect(()=>{
        getTasks();
    },[])

    if (tasks.length === 0 ) return (<h1>No hay sensores registrados</h1>)

    return(
        <div className="grid grid-cols-3 gap-2">
            {tasks.map(task =>(
                <TaskCard task={task} key={task._id}/>
            ))
            }
        </div>
    )

}
export default TasksPage