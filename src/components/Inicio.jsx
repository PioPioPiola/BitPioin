import { Encabezado } from './Encabezado';
import { Historico } from './Historico';
import { Comentarios } from './Comentarios';
import { EspacioPublicitario } from './EspacioPublicitario';
import { Footer } from './Footer';
import { CuadroConversiones } from './CuadroConversiones';
import { DetalleSaldo } from './DetalleSaldo';
import { VideoInicial } from './VideoInicial';

export function Inicio() {
    const mensaje = "hola";
    return (
        <div className="cuerpo-pagina">
            <Encabezado />
            <div className='informacion-inicio'>
                <main>
                    <VideoInicial />
                    <DetalleSaldo />
                    <section className='informacion-conversiones'>
                        <CuadroConversiones />
                        <Historico />
                    </section>
                    <Comentarios />
                </main>
                <EspacioPublicitario />
            </div>
            <div>
                <label>Datos del Usuario</label>
                <input
                    type="number"
                    placeholder="Points"
                    onBlur={(e) => {
                        const value = e.target.value;

                        if (!value) {
                            setMensaje(null);
                            return;
                        }

                        const result = UserShema.pick({ points: true }).safeParse({
                            points: Number(value)
                        });

                        if (!result.success) {
                            setMensaje({
                                text: result.error.issues[0].message,
                                ok: false
                            });
                        } else {
                            setMensaje({
                                text: "Correcto",
                                ok: true
                            });
                        }
                    }}
                />

                {mensaje && (
                    <p style={{ color: mensaje.ok ? "green" : "red" }}>
                        {mensaje.text}
                    </p>
                )}
            </div>
            {/* <FastForm />
            <SmartAuth /> */}
            <Footer />
        </div>
    );
}