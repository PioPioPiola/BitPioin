import { useState, useEffect } from 'react'
import type { assets } from '../types/Interfaces'
import { supabase } from "../../databaseConection";
import { deleteFile } from '../services/StorageService';
import { showToast } from '../components/Toast';

export const useAssets = () => {
    const [assets, setAssets] = useState<assets[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingItem, setEditingItem] = useState<assets | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set());

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('assets')
            .select('*')

        if (!error && data) {
            setAssets(data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (item: assets) => {
        setEditingId(item.id);
        setEditingItem(item);
    }

    const cancelEdit = () => {
        setEditingId(null);
        setEditingItem(null);
    }

    const confirmDelete = async () => {
        if (!deletingId) return;
        setIsDeleting(true);

        try {
            const targetItem = await supabase
                .from('assets')
                .select('*')
                .eq('id', deletingId)
                .single();

            if (targetItem?.data?.file_path) {
                await deleteFile(targetItem.data?.file_path);
            }

            await supabase
                .from('assets')
                .delete()
                .eq('id', deletingId);

            setDeletingId(null);
            await fetchData();
        } catch (error) {
            console.error("Error al eliminar:", error);
        } finally {
            setIsDeleting(false);
        }
    }

    const setLoading = (id: string, loading: boolean) => {
        setLoadingIds((prev) => {
            const next = new Set(prev);
            loading ? next.add(id) : next.delete(id);
            return next;
        });
    }

    const deleteOptimistics = async (id: string) => {
        const previous = [...assets]
        setAssets(assets.filter((a) => a.id !== id));

        const { error } = await supabase
            .from('assets')
            .delete()
            .eq('id', id);

        const forceError = true;
        if (forceError) {
            setAssets(previous);
            showToast("Error simulado - revertido", "error");
        }
    }

    return {
        assets,
        editingId,
        editingItem,
        deletingId,
        isDeleting,
        handleEdit,
        cancelEdit,
        setDeletingId,
        setIsDeleting,
        confirmDelete,
        fetchData
    }
}
