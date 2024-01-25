import { createContext, useState } from "react"
import { createTaskRequest,getTasksRequest, getTaskRequest,updateTaskRequest,
    getAllTasks} from "../api/tasks"


const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const [data, setData] = useState({
        temperatura: "",
        humedad: ""
    })


    const [tasks,setTasks] = useState([]);
    const [adminTasks,setAdminTasks] = useState([]);

    const handleCheck = e =>{
        const name = e.target.name
        e.target.checked 
        ? setIsChecked(prevCheck => ({
            ...prevCheck, [name]:true
        }))
        :setIsChecked(prevCheck => ({
            ...prevCheck, [name]:false
        }))
    }


    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const createTask= async (task) =>{
        const res= await createTaskRequest(task);
        console.log(res);
    }

    const getTasks= async() =>{
        try {
            const res= await getTasksRequest()
            console.log(res.data)
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getAdminTasks= async()=>{
        try {
            const res= await getAllTasks()
            console.log(res.data)
            setAdminTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getTask = async(id) => {
       const res= await getTaskRequest(id)
    }

    const updateTask = async(id,task) => {
        try {
            await updateTaskRequest(id,task)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <FormContext.Provider value={{ data, setData, handleCheck, 
        handleChange, createTask, getTasks,getTask,tasks,setTasks,updateTask,
        getAdminTasks,setAdminTasks }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 