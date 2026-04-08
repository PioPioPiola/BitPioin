import React, { createContext, useState, useContext } from 'react';

const ContextoCarrito = createContext();

export const ProveedorCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const añadirAlCarrito = (producto) => {
        setCarrito((previoCarrito) => [...previoCarrito, producto]);
    };

    const limpiarCarrito = () => setCarrito([]);

    return (
        <ContextoCarrito.Provider value={{ carrito, añadirAlCarrito, limpiarCarrito }}>
            {children}
        </ContextoCarrito.Provider>
    );
};

// Hook personalizado para usar el carrito
export const useCarrito = () => useContext(ContextoCarrito);