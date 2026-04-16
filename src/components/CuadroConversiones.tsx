import { useState } from "react";

interface OperacionMercado {
    tipo: 'Compra' | 'Venta';
    montoDolares: number;
    precioBTC: number;
}

export function CuadroConversiones() {
    const [operacion, setOperacion] = useState<OperacionMercado>({
        tipo: 'Compra',
        montoDolares: 0,
        precioBTC: 65000 
    });

    const [cash, setCash] = useState<number>(100000);
    const [saldoBTC, setSaldoBTC] = useState<number>(0.07798462);

    const ejecutarOrden = () => {
        const cantidadBTC = operacion.montoDolares / operacion.precioBTC;

        if (operacion.tipo === 'Compra') {
            if (operacion.montoDolares <= cash) {
                setCash(previo => previo - operacion.montoDolares);
                setSaldoBTC(previo => previo + cantidadBTC);
                // TO DO: agregar el push en el context para el hisdtorial de conversiones
            } else {
                alert("Fondos insuficientes en USD");
            }
        } else {
            if (cantidadBTC <= saldoBTC) {
                setCash(previo => previo + operacion.montoDolares);
                setSaldoBTC(previo => previo - cantidadBTC);
            } else {
                alert("Fondos insuficientes en BTC");
            }
        }
    };

    return (
        <section className="card-conversion">
            <div className="banner-overlay">
                <p>Cash: ${cash.toLocaleString()} USD | Saldo: {saldoBTC.toFixed(8)} BTC</p>
            </div>

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
                        value={`$${operacion.precioBTC.toLocaleString()}`} 
                        readOnly 
                        style={{ backgroundColor: '#2d2d2d', cursor: 'not-allowed' }}
                    />
                </div>

                {/* TODO: componente select de Operación */}
                <div className="full-width">
                    <label>Operación</label>
                    <select 
                        onChange={(e) => setOperacion({...operacion, tipo: e.target.value as 'Compra' | 'Venta'})}
                    >
                        <option value="Compra">Comprar Bitcoin</option>
                        <option value="Venta">Vender Bitcoin</option>
                    </select>
                </div>

                <div className="full-width">
                    <button className="btn-principal" onClick={ejecutarOrden}>
                        Ejecutar Orden
                    </button>
                </div>
            </div>
        </section>
    );
}