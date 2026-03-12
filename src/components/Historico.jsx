export function Historico(){
 return (
        <article>
        <h2 className="titulo-article">Histórico de Conversiones</h2>
        <table id="historico-conversiones">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Moneda Origen</th>
                    <th>Moneda Destino</th>
                    <th>Cantidad</th>
                    <th>Resultado</th>
                    <th>Tasa comisión</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2023-01-01</td>
                    <td>USD</td>
                    <td>BTC</td>
                    <td>1000</td>
                    <td>0.025 BTC</td>
                    <td>1%</td>
                </tr>
            </tbody>
        </table>
    </article>
 )
}