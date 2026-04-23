import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";
import { DetalleProducto } from "./DetalleProducto";
import { useCarrito } from "./SessionContext";
import { Producto } from "../types/Interfaces";

export function CardProducto({ producto }: { producto: Producto }) {
    const { añadirAlCarrito } = useCarrito();
    return(
        <div className="card-producto">
            <img src={producto.image} alt={producto.name} className="imagen-producto"></img>
            <h2 className="titulo-card-producto">{producto.name}</h2>
            <span className="precio-card-producto">{producto.current_price} USD</span>
            <Link className="boton-ver-mas" to={`/Productos/${producto.id}`}>Ver más</Link>
            <div className="carrito-card-productos">
                <input type="number" />
                <button onClick={() => añadirAlCarrito(producto)}>Agregar <ShoppingCart size={15}/></button>
            </div>
        </div>
    )
}