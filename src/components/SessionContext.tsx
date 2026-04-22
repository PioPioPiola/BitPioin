import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Producto, ItemCarrito, SaldoActual, RegistroHistorial } from '../types/Interfaces';

interface ContextoCarritoType {
  carrito: ItemCarrito[];
  añadirAlCarrito: (producto: Producto) => void; 
  limpiarCarrito: () => void;
}

interface ContextoOperacionesType {
  saldo: SaldoActual;
  historial: RegistroHistorial[];
  ejecutarTransaccion: (operacion: Omit<RegistroHistorial, 'id' | 'fecha'| 'monedaDestino'>) => void;
}

const OperacionesContext = createContext<ContextoOperacionesType | undefined>(undefined);

export const OperacionesProvider = ({ children }: { children: ReactNode }) => {
    const [saldo, setSaldo] = useState<SaldoActual>({
        saldoBase: 1000000,
        saldoRetirado: 0,
        monedaBase: 'USD',
        saldoBTC: 0.07798462 
    });

    const [historial, setHistorial] = useState<RegistroHistorial[]>([]);

    const ejecutarTransaccion = (data: Omit<RegistroHistorial, 'id' | 'fecha' | 'monedaDestino'>) => {
        setSaldo(prev => ({
            ...prev,
            saldoBase: data.tipo === 'Compra' 
                ? prev.saldoBase - data.montoInvertido 
                : prev.saldoBase + data.montoInvertido,
            saldoBTC: data.tipo === 'Compra' 
                ? prev.saldoBTC + data.montoInvertido 
                : prev.saldoBTC - data.montoInvertido,
        }));

        const nuevaOperacion: RegistroHistorial = {
            ...data,
            id: crypto.randomUUID(),
            fecha: new Date(),
            monedaDestino: 'BTC'
        };

        setHistorial(prev => [nuevaOperacion, ...prev]);
    };

    return (
        <OperacionesContext.Provider value={{ saldo, historial, ejecutarTransaccion }}>
            {children}
        </OperacionesContext.Provider>
    );
};

export const useOperaciones = () => {
    const context = useContext(OperacionesContext);
    if (context === undefined) {
        throw new Error('Error');
    }
    return context;
};


interface ProveedorProiedades {
  children: ReactNode;
}

const ContextoCarrito = createContext<ContextoCarritoType | undefined>(undefined);

export const ProveedorCarrito = ({ children }: ProveedorProiedades) => {
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
        <ContextoCarrito.Provider value={{ carrito, añadirAlCarrito, limpiarCarrito}}>
            {children}
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