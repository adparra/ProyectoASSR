import { useEffect } from "react";
import useFormContext from "../hook/useFormContext"
import TaskCard from "../components/TaskCard"

function AdminTasks(){

    const{getAdminTasks, adminTasks } = useFormContext();


    useEffect(()=>{
        getAdminTasks();
    },[])

    if (adminTasks.length === 0 ) return (<h1>No hay ordenes realizadas</h1>)

    return(
        <div className="grid grid-cols-3 gap-2">
            {adminTasks.map(task =>(
                <TaskCard task={task} key={task._id}/>
            ))
            }
        </div>
    )

}
export default AdminTasks