import { Logo } from './Logo'; 
import { MenuPrincipal } from './MenuPrincipal'; 
import { BotonesLogin } from './BotonesLogin';
import { useState } from "react";

export function Encabezado() {
    const[loggedIn, setLoggedIn] = useState(true);//por ahora es true, luego false

    return (
        <header className="header-principal">
            <div className="brand">
                <div className="brand-logo">
                    <Logo claseLogo="logo-principal" />
                    <h1>BitPioin</h1>
                </div>
            {loggedIn ? <BotonesLogin /> : null}
            </div>
            <MenuPrincipal />
        </header>
    );
}