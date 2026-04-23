export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
    id: number;
    symbol: string;
    name: string;      
    current_price: number;         
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
  saldoRetirado: number;
  monedaBase: string;
  saldoBTC: number;
}

export interface RegistroHistorial {
  id: string;
  fecha: Date;
  tipo: 'Compra' | 'Venta';
  montoInvertido: number;
  monedaOrigen: 'USD';
  saldoBTC: number;
  monedaDestino: 'BTC';
  precio: number;
}