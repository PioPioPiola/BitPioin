import { Trash2 } from 'lucide-react';
import { useState } from 'react';

export function CardComment({ twit, id }) {
    const[visible, setVisible] = useState(true);
    const eliminarComentario = () => {
        setVisible(false);
    }

    if (!visible) {
        return null;
    }

    return (
        <div className='elemento-twit' key={id}>
            <div>
            <li style={{ listStyle: 'none' }}>
                <span style={{ color: '#f2a900', fontWeight: 'bold' }}>@Usuario: </span>
                {twit}
            </li>
            </div>
            <Trash2 className='icono icono-eliminar'onClick={eliminarComentario}/>
        </div>
        
    )
}