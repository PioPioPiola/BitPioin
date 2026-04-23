import { useOperaciones } from "./SessionContext";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function PaginaHistorico() {
    const { historial } = useOperaciones();

    return (
        <div className="contenedor-historico-completo">
            <div className="boton-volver"><Link to="/"><Home/> Volver al inicio</Link></div>
            <article>
            <h2 className="titulo-historico-completo">Histórico de Conversiones</h2>
            <table id="historico-conversiones-completo">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Moneda Origen</th>
                        <th>Moneda Destino</th>
                        <th>Cantidad (USD)</th>
                        <th>Resultado (BTC)</th>
                        <th>Precio BTC</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.length === 0 ? (
                        <tr>
                            <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                                No hay operaciones registradas.
                            </td>
                        </tr>
                    ) : (
                        historial.map((operacion) => (
                            <tr key={operacion.id}>
                                <td>{operacion.fecha.toLocaleDateString()} {operacion.fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                <td>{operacion.tipo === 'Compra' ? 'USD' : 'BTC'}</td>
                                <td>{operacion.tipo === 'Compra' ? 'BTC' : 'USD'}</td>
                                <td>${operacion.montoInvertido.toLocaleString()}</td>
                                <td style={{ color: operacion.tipo === 'Compra' ? '#2ecc71' : '#e74c3c', fontWeight: 'bold' }}>
                                    {operacion.tipo === 'Compra' ? '+' : '-'}{operacion.saldoBTC.toFixed(8)} BTC
                                </td>
                                <td>${operacion.precio.toLocaleString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </article>
        </div>
    );
}