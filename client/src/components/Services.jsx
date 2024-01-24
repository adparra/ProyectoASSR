import useFormContext from "../hook/useFormContext"

const Services = () => {
    const { isChecked, handleCheck } = useFormContext()

    const content = (
        <>
            <label htmlFor="cambioAceite">
                <input className=" bg-zinc-700 text-white" type="checkbox" id="cambioAceite" name="cambioAceite" checked={isChecked.cambioAceite} onChange={handleCheck} />
                Cambio de aceite
            </label>
            <label htmlFor="cambioFrenos">
                <input className=" bg-zinc-700 text-white" type="checkbox" id="cambioFrenos" name="cambioFrenos" checked={isChecked.cambioFrenos} onChange={handleCheck} />
                Cambio de frenos
            </label>
            <label htmlFor="alineacionBalanceo">
                <input className=" bg-zinc-700 text-white" type="checkbox" id="alineacionBalanceo" name="alineacionBalanceo" checked={isChecked.alineacionBalanceo} onChange={handleCheck} />
                Alineación y balanceo
            </label>
            <label htmlFor="diagnosticoGeneral">
                <input className=" bg-zinc-700 text-white" type="checkbox" id="diagnosticoGeneral" name="diagnosticoGeneral" checked={isChecked.diagnosticoGeneral} onChange={handleCheck} />
                Diagnóstico general
            </label>
            <label htmlFor="revisionElectrico">
                <input className=" bg-zinc-700 text-white" type="checkbox" id="revisionElectrico" name="revisionElectrico" checked={isChecked.revisionElectrico} onChange={handleCheck} />
                Revisión de sistema eléctrico
            </label>
        </>
    )

    return content
}
export default Services