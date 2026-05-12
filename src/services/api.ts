import { supabase } from "../../databaseConection";
import type { UsuarioPersona } from "../types/Interfaces";

export const updateAsset = async (
    id: string,
    data: Partial<UsuarioPersona>
): Promise<{ error: any }> => {
    const { error } = await supabase
        .from('UsuarioPersona')
        .update(data)
        .eq('id', id);

    return { error };
};
