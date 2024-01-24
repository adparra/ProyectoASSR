import useFormContext from "../hook/useFormContext"

const Client = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col ">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="clienteNombre">Nombre</label>
                    <input className=" bg-zinc-700 text-white"
                        type="text"
                        id="clienteNombre"
                        name="clienteNombre"
                        placeholder="Nombre"
                        value={data.clienteNombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="clienteApellido">Apellido</label>
                    <input className=" bg-zinc-700 text-white"
                        type="text"
                        id="clienteApellido"
                        name="clienteApellido"
                        placeholder="Apellido"               
                        value={data.clienteApellido}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="clienteMail">Dirección de e-mail</label>
            <input className=" bg-zinc-700 text-white"
                type="text"
                id="clienteMail"
                name="clienteMail"
                placeholder="ejemplo@mail.com"
                value={data.clienteMail}
                onChange={handleChange}
            />

            <label htmlFor="clienteTipoID">Tipo de identificación</label>
            <select className=" bg-zinc-700 text-white"
                id="clienteTipoID"
                name="clienteTipoID"
                value={data.clienteTipoID}
                onChange={handleChange}
            >
                <option value="" disabled selected hidden>Escoger tipo de documento</option>
                <option value="CED">Cédula</option>
                <option value="RUC">RUC</option>
                <option value="PAS">Pasaporte</option>
                
            </select>

            <label htmlFor="clienteId">Identificación fiscal</label>
            <input className=" bg-zinc-700 text-white"
                type="text"
                id="clienteId"
                name="clienteId"
                placeholder="12345"
                maxLength="10"
                value={data.clienteId}
                onChange={handleChange}
            />

            <label htmlFor="clienteNumero">Número de contacto</label>
            <input className=" bg-zinc-700 text-white"
                type="text"
                id="clienteNumero"
                name="clienteNumero"
                placeholder="1234567890"
                maxLength="10"
                value={data.clienteNumero}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Client