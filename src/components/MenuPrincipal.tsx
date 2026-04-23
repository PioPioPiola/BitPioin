import { Link, NavLink } from "react-router-dom";

export function MenuPrincipal(){
    return (
    <section>
            <nav className="menu-principal">
                <ul className="menu-principal-sitios">
                    <li><NavLink to ="/">Inicio</NavLink></li>
                    <li><NavLink to ="/Historico">Histórico de Conversiones</NavLink></li>
                    <li><NavLink to ="/Productos">Productos</NavLink></li>
                </ul>
            </nav>
        </section>
    )
}
    
