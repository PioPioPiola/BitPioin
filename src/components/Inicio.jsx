import { useState } from 'react';
import { Encabezado } from './Encabezado';
import { Monedas } from './Monedas';
import { Historico } from './Historico';
import { Comentarios } from './Comentarios';
import { EspacioPublicitario } from './EspacioPublicitario';
import { Footer } from './Footer';

export function Inicio() {
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
        <div className="cuerpo-pagina">
            <Encabezado />
            <main>
                <section className="card-conversion">
                    <video src="https://pixabay.com/es/videos/download/x-173481_medium.mp4" width="100%" autoPlay muted loop></video>
                </section>
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
                <Historico />
                <Comentarios />
            </main>
            <EspacioPublicitario />
            <Footer />
        </div>
    );
}