import { SaldoActual } from "../types/Interfaces"
import { useOperaciones } from "./SessionContext"

export function DetalleSaldo(){

    const {saldo} = useOperaciones();
    return(
        <>
        <div className="card-conversion saldo-actual-detalle">
            <div className="titulo-bitcoin">
                <span className="saldo-bitcoin">SALDO EN BITCOIN BTC</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/012/619/269/small/bitcoin-icon-in-orange-colors-cryptocurrency-related-image-png.png" alt="" />
            </div>
            <span>{saldo.saldoBTC.toFixed(8)} BTC</span>
            <span>${saldo.saldoRetirado.toFixed(3)} USD | Cash: ${saldo.saldoBase.toFixed(3)}{saldo.monedaBase.toLocaleString()}</span>
        </div>
        </>
    )
}