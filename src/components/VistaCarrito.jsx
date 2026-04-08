import React from 'react';
import { useCarrito } from '../components/CartContext';

export const VistaCarrito = () => {
    const { carrito } = useCarrito();

    const totalDolares = carrito.reduce((acumulador, item) => acumulador + item.price, 0);

    if (carrito.length === 0) {
        return <p>No hay productos en el carrito</p>;
    }

    return (
        <div className="contenedor-carrito">
            <h2>Tus productos</h2>
            <ul>
                {carrito.map((item, indice) => (
                    <li key={indice}>
                        {item.name} — <strong>${item.price.toFixed(2)}</strong>
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Total a pagar: ${totalDolares.toFixed(2)} USD</h3>
            <button className="boton-exito">Finalizar Pedido</button>
        </div>
    );
};