import {Link} from 'react-router-dom'


function TaskCard({task}){
    return(
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md"> 
            <h1 className="text-2xl font-bold">{task.clienteNombre}</h1>

            { task.estado_orden == 'enviada' ?
            (<div>
                <Link to={`/tasks/${task._id}`} className="bg-indigo-500 px-4 py-1 rounded-sm">Edit</Link>
            </div>): null}
            <p className="text-slate-300">{task.vehicleMarca}</p>
            <p className="text-slate-300">{task.estado_orden}</p> 
            <p>Fecha: {task.fecha}</p> 
            <p>Hora: {task.hora}</p>
        </div>
    )
}

export default TaskCard