import { Trash2 } from 'lucide-react';

export function Tarea({tarea, tipoTarea}){

    return(
        <div className="contenido-tarea-to-do">
            <span className="nombre-tarea-to-do">{tarea}</span>
            <span className="tipo-tarea-to-do">{tipoTarea}</span>
        </div>
    )
}