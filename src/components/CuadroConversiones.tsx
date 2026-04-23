import { useState } from "react";
import { useOperaciones } from "./SessionContext";

interface OperacionMercado {
    tipo: 'Compra' | 'Venta';
    montoDolares: number;
    precioBTC: number;
    monedaOrigen: 'USD'
}

export function CuadroConversiones() {
    const { saldo, ejecutarTransaccion } = useOperaciones();
    
    const [operacion, setOperacion] = useState<OperacionMercado>({
        tipo: 'Compra',
        montoDolares: 0,
        precioBTC: 65000 ,
        monedaOrigen: 'USD'
    });

    const [cash, setCash] = useState<number>(100000);
    const [saldoBTC, setSaldoBTC] = useState<number>(0.07798462);

    const ejecutarOrden = (tipoAccion: 'Compra' | 'Venta') => {
        const cantidadBTC = operacion.montoDolares / operacion.precioBTC;

        if (tipoAccion === 'Compra') {
            if (operacion.montoDolares > cash) {
                alert("Fondos insuficientes en USD");
            } 
        } else {
            if (cantidadBTC > saldoBTC) {
                alert("Fondos insuficientes en BTC");
            }
        }

        ejecutarTransaccion({
            tipo: tipoAccion,
            montoInvertido: operacion.montoDolares,
            saldoBTC: cantidadBTC,
            precio: operacion.precioBTC,
            monedaOrigen: operacion.monedaOrigen
        })
    };

    return (
        <section className="card-conversion" id="conversiones">
            <h2>Operar Mercado</h2>
            <div className="formulario-grid">
                <div className="full-width">
                    <label>Inversión (USD)</label>
                    <input 
                        type="number" 
                        placeholder="Monto en Dólares" 
                        onChange={(e) => setOperacion({...operacion, montoDolares: Number(e.target.value)})} 
                    />
                </div>

                <div className="full-width">
                    <label>Precio Actual BTC</label>
                    <input 
                        type="text" 
                        value={`${operacion.precioBTC.toLocaleString()} USD`} 
                        readOnly 
                        style={{ backgroundColor: '#2d2d2d', cursor: 'not-allowed' }}
                    />
                </div>
                    <button className="btn-principal btn-conversion" onClick={() =>ejecutarOrden('Compra')}>
                        <span>Comprar</span>
                        <span>{saldoBTC.toFixed(8)}</span>
                    </button>
                    <button className="btn-secundary btn-conversion" onClick={() =>ejecutarOrden('Venta')}>
                        <span>Vender</span>
                        <span>{saldoBTC.toFixed(8)}</span>
                    </button>
            </div>
        </section>
    );
}