import useFormContext from "../hook/useFormContext"

const Vehicle = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="vehicleMarca">Marca del vehículo</label>
                    <input className=" bg-zinc-700 text-white"
                        type="text"
                        id="vehicleMarca"
                        name="vehicleMarca"
                        placeholder="Toyota"
                        pattern="{1,}"
                        value={data.vehicleMarca}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="vehicleModelo">Modelo</label>
                    <input className=" bg-zinc-700 text-white"
                        type="text"
                        id="vehicleModelo"
                        name="vehicleModelo"
                        placeholder="Yaris"
                        pattern="{1,}"
                        value={data.vehicleModelo}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="vehiclePlaca">Placa</label>
            <input className=" bg-zinc-700 text-white"
                type="text"
                id="vehiclePlaca"
                name="vehiclePlaca"
                placeholder="AAA-000"
                pattern="{5,}"
                value={data.vehiclePlaca}
                onChange={handleChange}
            />

            <label htmlFor="vehicleGas">Nivel tanque de gasolina</label>
            <select className=" bg-zinc-700 text-white"
                id="vehicleGas"
                name="vehicleGas"
                value={data.vehicleGas}
                onChange={handleChange}
            >
                <option value="" disabled selected hidden>Escoger nivel del tanque de gasolina</option>
                <option value="Lleno">Lleno</option>
                <option value="Medio">Medio</option>
                <option value="Vacío">Vacío</option>
            </select>

            <label htmlFor="vehicleComment">Comentarios adicionales</label>
            <input className=" bg-zinc-700 text-white"
                type="text"
                id="vehicleComment"
                name="vehicleComment"
                placeholder="Agregar un comentario"
                pattern="{2,}"
                value={data.vehicleComment}
                onChange={handleChange}
            />

        </>
    )

    return content
}
export default Vehicle