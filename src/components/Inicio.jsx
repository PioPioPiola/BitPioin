import { Encabezado } from './Encabezado';
import { Historico } from './Historico';
import { Comentarios } from './Comentarios';
import { EspacioPublicitario } from './EspacioPublicitario';
import { Footer } from './Footer';
import { CuadroConversiones } from './CuadroConversiones';
import { DetalleSaldo } from './DetalleSaldo';
import { VideoInicial } from './VideoInicial';

export function Inicio() {
    return (
        <div className="cuerpo-pagina">
            <Encabezado />
            <div className='informacion-inicio'>
                <main>
                    <VideoInicial />
                    <DetalleSaldo saldoBase={100.000} monedaBase={"USD"} SaldoBTC={0.07798462}/>
                    <section className='informacion-conversiones'>
                        <CuadroConversiones/>
                        <Historico />
                    </section>
                    <Comentarios />
                </main>
                <EspacioPublicitario />
            </div>
            <Footer />
        </div>
    );
}