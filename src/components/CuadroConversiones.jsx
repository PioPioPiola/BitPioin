import { useState } from "react";
import { Monedas } from "./Monedas";

export function CuadroConversiones(){
    const [cantidad, setCantidad] = useState(0);
    const [monedaOrigen, setMonedaOrigen] = useState('USD');
    const [monedaDestino, setMonedaDestino] = useState('BTC');
    const [resultado, setResultado] = useState(0);

    const manejarConversion = () => {
        const tasas = { 'USD-BTC': 0.000023, 'USD-ETH': 0.00045, 'BTC-USD': 43000 };
        const key = `${monedaOrigen}-${monedaDestino}`;
        const tasa = tasas[key] || 1.5; 
        setResultado(cantidad * tasa);
    };

    return (
            <section id="conversiones" className="card-conversion">
                <h2>Conversión de Cristomonedas</h2>
                <div className="formulario-grid">
                    <div>
                        <label>Origen</label>
                        <Monedas id="origen" alCambiar={setMonedaOrigen} />
                    </div>
                    <div>
                        <label>Destino</label>
                        <Monedas id="destino" alCambiar={setMonedaDestino} />
                    </div>
                    <div className="full-width">
                        <label>Cantidad</label>
                        <input type="number" placeholder="0.00" onChange={(e) => setCantidad(Number(e.target.value))} 
                        />
                    </div>
                    <div className="full-width">
                        <button className="btn-principal" onClick={manejarConversion}>
                            Convertir Ahora
                        </button>
                    </div>
                    {resultado > 0 && (
                        <div className="resultado-display">
                            <p>Recibirás aproximadamente: <strong>{resultado.toFixed(6)} {monedaDestino}</strong></p>
                        </div>
                    )}
                </div>
            </section>
    )
}