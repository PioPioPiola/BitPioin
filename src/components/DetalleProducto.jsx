import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useCarrito } from './SessionContext';
import { Home } from "lucide-react";

export function DetalleProducto (){
    const { id } = useParams();
    const {data: Producto, loading, error} = useFetch("https://fakestoreapi.com/products/" + id)
    const { añadirAlCarrito } = useCarrito();

    if (loading) return <div className="spinner">Cargando detalles del producto...</div>;
    if (error) return <div className="error">Error: {error.message}</div>;
    if (!Producto) return <p>Producto no encontrado.</p>;
    
    return (
        <div>
        <div className="boton-volver"><Link to="/Productos"><Home/> Volver a la lista de productos</Link></div>
        <div className="contenedor-detalle">
            <div className="detalle-producto">
              <div>
                <img className="imagen-detalle" src={Producto.image} alt="" />
            </div>  
            <div className="detalles-producto">
                <p><strong>Producto: </strong>{Producto.title}</p>
                <p><strong>Descripción: </strong> {Producto.description}</p>
                <p><strong>Categoría: </strong>{Producto.category}</p>
                <p><strong>Precio: </strong>{Producto.price}</p>
                <button className="boton-agregar" onClick={() => añadirAlCarrito(Producto)}>Agregar al carrito</button>
            </div>
            </div>
        </div>
        </div>
    )
}