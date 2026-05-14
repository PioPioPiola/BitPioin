import { supabase } from "../../databaseConection";

/**
 * Sube un archivo al bucket de 'assets' y retorna el path y la URL pública.
 */
export const uploadAsset = async (file: File) => {
    const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    
    const { data, error } = await supabase.storage
        .from('assets')
        .upload(fileName, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
        .from('assets')
        .getPublicUrl(data.path);

    return {
        path: data.path,
        publicUrl
    };
};

/**
 * Sube avatares al bucket de 'avatars'.
 */
export const uploadToVault = async (file: File) => {
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload(`user_${Date.now()}.png`, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(data.path);

    return publicUrl;
};

/**
 * Elimina un archivo de cualquier bucket en el storage.
 */
export const deleteFile = async (filePath: string) => {
    const { error } = await supabase
        .storage
        .from('assets')
        .remove([filePath]);

    if (error) throw error;
};