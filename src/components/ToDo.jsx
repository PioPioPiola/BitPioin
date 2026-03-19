import { ListaTareas } from "./ListaTareas";
import { Trash2, Funnel, Plus } from 'lucide-react';
import { useState } from "react";
import { Tarea } from "./Tarea";
import { ObjetivoLogrado } from "./ObjetivoLogrado";

export function ToDo(){

    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState(' ');
    const [tipo, setTipo] = useState(' ');
    const [tipoTareaFiltro, setTipoTareaFiltro] = useState('');

    let inputHabilitado = tarea !== '' && tipo !== '';

    const tareasVisibles = tipoTareaFiltro === ' ' 
        ? tareas 
        : tareas.filter(t => t.tipo === tipoTareaFiltro);

    const agregarTarea = () => {
        setTareas([...tareas, {id: Date.now(), nombre: tarea, tipo: tipo}])
        setTarea('');
        setTipo('');
    }

    const eliminarTarea = (idTarea) => {
        setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
    }

    return(
        <div className="card contenedor-to-do">
            <div className="card filtro-to-do">
            <span><Funnel/>Filtrar por</span>
            <ListaTareas valorDefecto={"Todas las tareas"} tipoLista={"todas-to-do"} value={tipoTareaFiltro} onChange={setTipoTareaFiltro}/>
            </div>
            <div className="card acciones-to-do">
                <input 
                    className="caja-texto-to-do"
                    value={tarea} 
                    onChange = {(e) => setTarea(e.target.value)} 
                    type="text" 
                    placeholder="¿Qué hay que hacer?"
                    maxLength={120}
                />
                <ListaTareas valorDefecto={"Seleccione"} tipoLista={"seleccione-to-do"} value={tipo} onChange={setTipo}/>
                <button onClick={agregarTarea} disabled={!inputHabilitado}><Plus className="icono-agregar"/>Agregar</button>
            </div>
            <div className="card tareas-to-do">
                {tareas.length > 3 ? <ObjetivoLogrado/> : ''}
                {tareasVisibles.map((tarea) => (
                <div className="card tarea-to-do" key={tarea.id}>
                    <Tarea tarea={tarea.nombre} tipoTarea={tarea.tipo} />
                    <Trash2 className='icono icono-eliminar' onClick={() => eliminarTarea(tarea.id)}/>
                </div>
                ))}
            </div>
        </div>
    )
}