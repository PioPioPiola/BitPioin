import { useImagePreview } from "../hooks/useImagePreview";

export function Perfil() {
    const { preview, isUploading, onFileSelected } = useImagePreview();

    return (
        <div className="perfil card-contenedor">
            <input type="file" accept="image/*" onChange={onFileSelected} disabled={isUploading} />

            {isUploading && <p>Subiendo imagen...</p>}

            {preview && (
                <img
                    src={preview}
                    alt="Vista previa"
                    style={{ maxWidth: 200, opacity: isUploading ? 0.5 : 1 }}
                />
            )}
        </div>
    );
}
