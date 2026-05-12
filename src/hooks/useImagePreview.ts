import { useState, type ChangeEvent } from "react";
import { uploadToVault } from "../services/StorageService";

export const useImagePreview = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const onFileSelected = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const tempUrl = URL.createObjectURL(file);
        setPreview(tempUrl);

        try {
            setIsUploading(true);
            const publicUrl = await uploadToVault(file);
            setImageUrl(publicUrl);
            console.log("Imagen subida con éxito:", publicUrl);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return { preview, imageUrl, isUploading, onFileSelected };
};
