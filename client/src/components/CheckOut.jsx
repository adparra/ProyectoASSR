import useFormContext from "../hook/useFormContext"
import Checked from "./Checked"

const CheckOut = () => {

    const { data, isChecked } = useFormContext()

    const content = (
        <div className="flex-col">
            <p>Por favor revise que todos los datos ingresados sean los correctos</p>
            <ul className="flex-col">
                <p className="title">Datos del cliente</p>
                <li>Nombre: {data.clienteNombre}</li>
                <li>Apellido: {data.clienteApellido}</li>
                <li>E-mail: {data.clienteMail}</li>
                <li>Número de identificación: {data.clienteID}</li>
                <li>Número telefónico: {data.clienteNumero}</li>
                <p className="title">Datos del vehículo</p>
                <li>Marca del vehículo: {data.vehicleMarca}</li>
                <li>Modelo del vehículo: {data.vehicleModelo}</li>
                <li>Placa: {data.vehiclePlaca}</li>
                <li>Nivel de tanque de gasolina: {data.vehicleGas}</li>
                <li>Comentarios adicionales: {data.vehicleComment}</li>
                <ul className="flex-col">
                    <p className="title">Servicios Contratados</p>
                    <li><Checked 
                        isChecked={isChecked.cambioAceite}
                        value="Cambio de aceite"
                    /></li>
                    <li><Checked 
                        isChecked={isChecked.cambioFrenos}
                        value="Cambio de frenos"
                    /></li>
                    <li><Checked 
                        isChecked={isChecked.alineacionBalanceo}
                        value="Alineación y balanceo"
                    /></li>
                    <li><Checked 
                        isChecked={isChecked.diagnosticoGeneral}
                        value="Diagnóstico general"
                    /></li>
                    <li><Checked 
                        isChecked={isChecked.revisionElectrico}
                        value="Revisión de sistema eléctrico"
                    /></li>
                </ul>
            </ul>
            <p><b>Fecha estimada de entrega:</b> 23 de Junio</p>
            <p><b>Precio:</b> 60 dólares</p>
        </div>
    )
    return content;
}
export default CheckOut;
