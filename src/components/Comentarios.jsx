import { useState } from 'react';
import { CardComment } from './CardComments';

export function Comentarios(){
    const[text, setText] = useState(' ');
    const[contenido, setContenido] = useState([]);

    let esInvalido = text.length === 0 || text.length > 280;

    const manejarEnvio = () => {
            setContenido([text, ...contenido]);
            setText('');
    };

    return (
    <div>
        <h3>Comentarios</h3>
        <form action="">
            <div className='titulo-twit'>
                <label htmlFor="">
            </label>
            <textarea value={text} onChange={(e) => setText(e.target.value) }className="caja-texto" placeholder='Escribir algo aquí...' ></textarea>
            </div>
            <span id='contador-caracteres'>{text.length}</span>
            <button className="btn-principal" type="button" disabled={esInvalido} onClick={manejarEnvio}>Añadir comentario</button>
            <a ></a>
        </form>
        <ul className='espacio-twits'>
            {contenido.map((twit, index) => (
                <CardComment key={index} twit={twit} id={index}/>
            ))}
        </ul>
    </div>
    )
}