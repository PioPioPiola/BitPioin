import { SaldoActual } from "../types/Interfaces"

export function DetalleSaldo(saldoActual: SaldoActual){
    return(
        <>
        <div className="card-conversion saldo-actual-detalle">
            <div>
                <span>SALDO EN BITCOIN BTC</span>
                <span>{saldoActual.SaldoBTC.toFixed(8)} BTC</span>
            </div>
            <span>$0 USD | Cash: ${saldoActual.saldoBase.toFixed(3)}{saldoActual.monedaBase.toLocaleString()}</span>
        </div>
        </>
    )
}