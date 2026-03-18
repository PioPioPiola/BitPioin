export function VideoInicial() {
    return (
        <video 
            autoPlay 
            muted 
            loop 
            className="video-inicio">
            <source src="./src/assets/VideoInicio.mp4" type="video/mp4" />
        </video>
);
}