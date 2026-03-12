import {Logo} from './Logo';

export function Footer(){
    return(
        <footer>
            <div>
                <Logo claseLogo="logo-principal"/>
                <p>&copy; 2024 BitPioin. Todos los derechos reservados.</p>
            </div>
            <div>
                <ul>
                    <li><a href="">Política de Privacidad</a></li>
                    <li><a href="">Términos de Servicio</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><button>Soporte</button></li>
                </ul>
            </div>
        </footer>
    )
}