import FormInputs from './Inputs'
import useFormContext from "../hook/useFormContext"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Form = () => {

    const {
        page,
        setPage,
        title,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        data,
        isChecked,
        createTask,
        getTask,
        updateTask
    } = useFormContext()

    const navigate= useNavigate();
    const params= useParams();

    useEffect(()=>{
        async function loadTask() {
        if(params.id){
            const task= await getTask(params.id);
            console.log(task);

        }
    }loadTask()
    },[])

    const {handleSubmit, setValue} = useForm()
    const info= data;
    const services= isChecked;
    const filteredService = [];
    for (var service in services){
        if(services[service] == true){
            filteredService.push(service);
        }
    }
    const servicios = {...info, lista_servicios:filteredService, estado_orden:"enviada"};
    const onSubmit= handleSubmit(()=>{
        if (params.id){
            updateTask(params.id, servicios);
        }else{
            createTask(servicios);
        }
        navigate('/tasks');
    });

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const content = (
        <form className="form flex-col" onSubmit={onSubmit}>
            
            <header className="form-header">
                <h2>{title[page]}</h2>

                <div className="button-container">

                    <button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

                    
                </div>
            </header>


            <FormInputs />

            <footer className='form-footer'>
                <div className="button-container">
                    <button type="submit" className={`button ${submitHide}`} >Submit</button>
                </div>

            </footer>

        </form>
    )

    return content
}
export default Form