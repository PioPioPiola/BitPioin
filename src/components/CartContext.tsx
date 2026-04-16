import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Producto, ItemCarrito } from '../types/Interfaces';

interface ContextoCarritoType {
  carrito: ItemCarrito[];
  añadirAlCarrito: (producto: Producto) => void; 
  limpiarCarrito: () => void;
}

interface ProveedorProiedades {
  hijo: ReactNode;
}

const ContextoCarrito = createContext<ContextoCarritoType | undefined>(undefined);

export const ProveedorCarrito = ({ hijo }: ProveedorProiedades) => {
    const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

    const añadirAlCarrito = (producto: Producto) => {
        setCarrito((previoCarrito) => {
            const itemExistente = previoCarrito.find(item => item.id === producto.id);
            
            if (itemExistente) {
                return previoCarrito.map(item =>
                    item.id === producto.id 
                        ? { ...item, cantidad: item.cantidad + 1 } 
                        : item
                );
            }
            
            return [...previoCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const limpiarCarrito = () => setCarrito([]);

    return (
        <ContextoCarrito.Provider value={{ carrito, añadirAlCarrito, limpiarCarrito }}>
            {hijo}
        </ContextoCarrito.Provider>
    );
};

export const useCarrito = (): ContextoCarritoType => {
    const contexto = useContext(ContextoCarrito);
    if (!contexto) {
        throw new Error("Error");
    }
    return contexto;
};