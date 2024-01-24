import Client from "./Client"
import Services from "./Services"
import Vehicle from "./Vehicle"
import CheckOut from "./CheckOut"
import useFormContext from "../hook/useFormContext"


const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Client />,
        1: <Vehicle />,
        2: <Services />,
        3: <CheckOut/>
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs