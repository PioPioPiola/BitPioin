export function Monedas({ id, alCambiar }) { //TO DO: utilizar librería para mostrar país y moneda
    return (
        <select id={id} onChange={(e) => alCambiar(e.target.value)} defaultValue="USD">
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">Libra Esterlina (GBP)</option>
            <option value="JPY">Yen Japonés (JPY)</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USD" selected>Dólar Estadounidense (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">Libra Esterlina (GBP)</option>
            <option value="JPY">Yen Japonés (JPY)</option>
        </select>
    );
}