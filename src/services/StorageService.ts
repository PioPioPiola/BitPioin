import { supabase } from "../../databaseConection";

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
