import { useState, useEffect } from 'react'
import type { UsuarioPersona } from '../types/Interfaces'

export const useAssets = () => {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingItem, setEditingItem] = useState<UsuarioPersona | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleEdit = (item: UsuarioPersona) => {
        setEditingId(item.id);
        setEditingItem(item);
    }

    const cancelEdit = () => {
        setEditingId(null);
        setEditingItem(null);
    }

    return {
        editingId,
        editingItem,
        deletingId,
        handleEdit,
        cancelEdit,
        setDeletingId
    }
}