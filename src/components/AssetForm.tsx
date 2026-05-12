import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { UsuarioPersona } from '../types/Interfaces'

interface AssetFormProps {
    editingItem: UsuarioPersona | null;
    assets: UsuarioPersona[];
    onSave: (data: Omit<UsuarioPersona, 'id' | 'fechaCreacion' | 'ultimaModificacion'>) => void;
    onCancel: () => void;
    handleEdit: (item: UsuarioPersona) => void;
    setDeletingId: (id: string) => void;
}

export const AssetForm = ({ editingItem, assets, onSave, onCancel, handleEdit, setDeletingId }: AssetFormProps) => {
    const { register, reset, handleSubmit } = useForm<Omit<UsuarioPersona, 'id' | 'fechaCreacion' | 'ultimaModificacion'>>({
        defaultValues: { nombre: '', cantidad: 0 }
    })

    useEffect(() => {
        if (editingItem) {
            reset(editingItem);
        } else {
            reset({ nombre: '', cantidad: 0 });
        }
    }, [editingItem, reset]);

    const onSubmit = (data: Omit<UsuarioPersona, 'id' | 'fechaCreacion' | 'ultimaModificacion'>) => {
        onSave(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{editingItem ? 'Editar' : 'Agregar'} Activo</h2>
                <div>
                    <label>Nombre</label>
                    <input
                        {...register('nombre', { required: true })}
                    />
                </div>
                <div>
                    <label>Cantidad</label>
                    <input
                        type="number"
                        {...register('cantidad', { required: true, min: 0 })}
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
                            <p>{item.nombre}</p>
                            <p>Cantidad: {item.cantidad}</p>
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
