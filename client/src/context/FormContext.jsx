import { createContext, useState } from "react"
import { createTaskRequest,getTasksRequest, getTaskRequest,updateTaskRequest,
    getAllTasks} from "../api/tasks"


const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Información del cliente',
        1: 'Información del vehículo',
        2: 'Servicios',
        3: 'CheckOut'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        clienteNombre: "",
        clienteApellido: "",
        clienteMail: "",
        clienteNumero: "",
        clienteTipoID: "",
        clienteId: "",
        vehicleMarca: "",
        vehicleModelo: "",
        vehiclePlaca: "",
        vehicleGas: "",
        vehicleComment: ""
    })

    const [isChecked,setIsChecked] = useState({
        cambioAceite: false,
        cambioFrenos: false,
        alineacionBalance: false,
        diagnosticoGeneral: false,
        revisionElectrico: false
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

    const canSubmit = [...Object.values(data)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('cliente'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('vehicle'))
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

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
        <FormContext.Provider value={{ title, page, setPage, data, setData, isChecked, setIsChecked, handleCheck, canSubmit, 
        handleChange, disablePrev, disableNext, prevHide, nextHide, 
        submitHide, createTask, getTasks,getTask,tasks,setTasks,updateTask,
        getAdminTasks,adminTasks,setAdminTasks }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 