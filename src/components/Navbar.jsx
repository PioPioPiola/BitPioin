import { Link } from 'react-router-dom';
import { useCarrito } from './SessionContext';
import { ShoppingCart } from 'lucide-react'; 
import { Home } from 'lucide-react';

export const Navbar = () => {
    const { carrito } = useCarrito();
    
    const cantidadTotal = carrito.length;

    return (
        <nav className="navbar">
            <Link to="/carrito" className="cart-link">
                <ShoppingCart />
                {cantidadTotal > 0 && (
                    <span className="badge">{cantidadTotal}</span>
                )}
            </Link>
        </nav>
    );
};