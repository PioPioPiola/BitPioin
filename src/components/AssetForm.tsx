import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { assets } from '../types/Interfaces'

interface AssetFormProps {
    editingItem: assets | null;
    assets: assets[];
    onSave: (data: Omit<assets, 'id' | 'fechaCreacion' | 'ultimaModificacion'>) => void;
    onCancel: () => void;
    handleEdit: (item: assets) => void;
    setDeletingId: (id: string) => void;
}

export const AssetForm = ({ editingItem, assets, onSave, onCancel, handleEdit, setDeletingId }: AssetFormProps) => {
    const { register, reset, handleSubmit } = useForm<Omit<assets, 'id'>>({
        defaultValues: { name: '' }
    })

    useEffect(() => {
        if (editingItem) {
            reset(editingItem);
        } else {
            reset({ name: '' });
        }
    }, [editingItem, reset]);

    const onSubmit = (data: Omit<assets, 'id'>) => {
        onSave(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{editingItem ? 'Editar' : 'Agregar'} Activo</h2>
                <div>
                    <label>Nombre</label>
                    <input
                        {...register('name', { required: true })}
                    />
                </div>
                <div>
                    <button type="submit">
                        {editingItem ? 'Actualizar' : 'Agregar'}
                    </button>
                    {editingItem && (
                        <button
                            type="button"
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
            <div>
                {assets.map((item) => (
                    <div key={item.id}>
                        <div>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button
                                onClick={() => handleEdit(item)}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => setDeletingId(item.id)}
                            >
                                Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
