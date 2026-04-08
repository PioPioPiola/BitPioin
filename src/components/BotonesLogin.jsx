import { Link } from "react-router-dom";

export function BotonesLogin(){
    return(
        <ul className="header-botones">
            <li><button className="btn-principal"><Link to="/Login">Iniciar Sesión</Link></button></li>
            <li><button className="btn-principal"><Link to="/Login">Registrarse</Link></button></li>
        </ul>
    )
}