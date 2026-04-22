import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="footer-principal">
            <div className="footer-content">
                <div className="footer-brand">
                    <Logo claseLogo="logo-footer" />
                    <div className="brand-text">
                        <p className="brand-name">BitPioin</p>
                        <p className="copyright">&copy; 2026 BitPioin. Todos los derechos reservados.</p>
                    </div>
                </div>
                
                <div className="footer-links">
                    <ul className="links-lista">
                        <li><a href="#privacidad">Política de Privacidad</a></li>
                        <li><a href="#terminos">Términos de Servicio</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><button className="btn-soporte">Soporte 24/7</button></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}