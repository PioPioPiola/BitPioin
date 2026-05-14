import { supabase } from "../../databaseConection";
import type { assets } from "../types/Interfaces";

export const updateAsset = async (
    id: string,
    data: Partial<assets>
): Promise<{ error: any }> => {
    const { error } = await supabase
        .from('assets')
        .update(data)
        .eq('id', id);

    return { error };
};

export const deleteAsset = async (id: string): Promise<{ error: any }> => {
    const { error } = await supabase
        .from('assets')
        .delete()
        .eq('id', id);

    return { error };
};

export const fetchAssets = async (term: string = ''): Promise<assets[]> => {
    let query = supabase
        .from('assets')
        .select('*')
        .order('created_at', { ascending: false });

    if (term) {
        query = query
            .ilike('name', `%${term}%`)
    }

    const { data, error } = await query;

    if (error) throw error;

    return data ?? [];
}
