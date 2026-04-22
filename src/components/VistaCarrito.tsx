import React from 'react';
import { useCarrito } from './SessionContext';
import { ItemCarrito } from '../types/Interfaces';

export const VistaCarrito = () => {
    const { carrito, limpiarCarrito } = useCarrito();
//TO DO: Usar pick para itemCarrito en vez de heredar de Producto

    const totalDolares = carrito.reduce((acumulador: number, item: ItemCarrito) => 
        acumulador + (item.price * item.cantidad), 0
    );

    if (carrito.length === 0) {
        return <p>No hay productos en el carrito</p>;
    }

    return (
        <div className="contenedor-carrito">
            <h2>Tus productos</h2>
            <ul>
                {carrito.map((item, indice) => (
                    <li key={indice}>
                        {item.title} — <strong>${item.price.toFixed(2)}</strong>
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Total a pagar: ${totalDolares.toFixed(2)} USD</h3>
            <button className="boton-exito">Finalizar Pedido</button>
        </div>
    );
};