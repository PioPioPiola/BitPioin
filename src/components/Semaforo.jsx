import { useState } from "react";
export function Semaforo(){
const [colorLuz, setColorLuz] = useState('rojo');
const [colorLuzDos, setColorLuzDos] = useState('gris');

const CambiarSemaforo = () => {
if (colorLuz === 'gris') {
    setColorLuz('verde');
    setColorLuzDos('gris');
}
else if(colorLuzDos === 'gris'){
    setColorLuz('gris');
    setColorLuzDos('rojo');
}
};

    return(
        <div className="semaforo">
            <div className="contenedor-semaforo">
                <div className={colorLuz}></div>
                <div className={colorLuzDos}></div>
            </div>
            <button onClick={CambiarSemaforo}>Cambiar semáforo</button>
        </div>
    )
}