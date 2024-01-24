import Form from "../components/Form"
import { FormProvider } from '../context/FormContext'

function TaskFormPage(){
    return(
        <FormProvider>
            <Form />
        </FormProvider>
    )

}
export default TaskFormPage