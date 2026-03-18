import { useState } from "react";
import { MensajeCompra } from "./MensajeCompra";

export function CardCarrito({productos}){
const [compra, setCompra] = useState(false);   
const total = productos.reduce((total, producto) => total + producto.valor, 0);

    return (
        compra ? <MensajeCompra /> :
        <div className="card-carrito">
            <h2>Tú carrito</h2>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
            {productos.map((producto) => (
                <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>${producto.valor}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <span className="total-productos">Total: ${total}</span>
        <button onClick={() => setCompra(true)}>Comprar</button>
        </div>
    )
}