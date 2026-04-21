export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
    id: number;
    title: string;      
    price: number;       
    description: string;
    category: string;    
    image: string;       
};

export interface ItemCarrito extends Producto {
  cantidad: number;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  roles: string[];
}

export interface Transaccion {
  id: string;
  productos: ItemCarrito[];
  total: number;
  fecha: Date;
}

export interface SaldoActual {
  saldoBase: number;
  totalRetiros: number;
  monedaBase: string;
  SaldoBTC: number;
}