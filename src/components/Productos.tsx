import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { CardProducto } from "./CardProducto";
import { Producto } from "../types/Interfaces";

export function Productos(){

    const {data: listaProductos, loading, error } = useFetch<Producto[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=etf");

    return(
        <div className="productos">
            <div className="boton-volver"><Link to="/"><Home/> Volver al inicio</Link></div>
            {loading ? (
                <p>Cargando productos...</p> 
            ) : (
                <>
                    <h2>Productos</h2>
                    {error && <p>Error al cargar: {error}</p>}
                    
                    <div className="productos-grid">
                        {listaProductos && listaProductos.map((producto: Producto) => (
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