import { Encabezado } from './Encabezado';
import { Historico } from './Historico';
import { Comentarios } from './Comentarios';
import { EspacioPublicitario } from './EspacioPublicitario';
import { Footer } from './Footer';
import { CuadroConversiones } from './CuadroConversiones';
import { VideoInicial } from './VideoInicial';

export function Inicio() {
    return (
        <div className="cuerpo-pagina">
            <Encabezado />
            <div className='informacion-inicio'>
                <main>
                    <VideoInicial />
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