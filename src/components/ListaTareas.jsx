export function ListaTareas({valorDefecto, tipoLista, value, onChange}){
    return(
        <div className="select-to-do">
        <select className={tipoLista} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value=" ">{valorDefecto}</option>
            <option value="Ocio">Ocio</option>
            <option value="Estudio">Estudio</option>
            <option value="Trabajo">Trabajo</option>
        </select>
        </div>
    )
}