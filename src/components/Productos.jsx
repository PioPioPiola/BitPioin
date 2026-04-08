import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { CardProducto } from "./CardProducto";

export function Productos(){

    const {data: Productos, loading, error } = useFetch("https://fakestoreapi.com/products");

    return(
        <div className="productos">
            <div className="boton-volver"><Link to="/"><Home/> Volver al inicio</Link></div>
            {loading ? (
                <p>Cargando productos...</p> 
            ) : (
                <>
                    <h2>Productos</h2>
                    {error && <p>Error al cargar: {error.message}</p>}
                    
                    <div className="productos-grid">
                        {Productos.map((producto) => (
                            <div key={producto.id} className="item-grid">
                                <CardProducto producto={producto}/>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}