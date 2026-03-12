import { Logo } from './Logo'; 
import { MenuPrincipal } from './MenuPrincipal'; 

export function Encabezado() {
    return (
        <header className="header-principal">
            <div className="brand">
                <Logo claseLogo="logo-principal" />
                <h1>BitPioin</h1>
            </div>
            <MenuPrincipal />
        </header>
    );
}