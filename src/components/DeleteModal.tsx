import type { assets } from "../types/Interfaces";
import React from "react";

export const DeleteModal = ({ deletingId, setDeletingId, isDeleting, confirmDelete }) => {

    return (
        <>
            {deletingId && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>¿Borrar este registro?</h3>
                        <p>Esta acción no se puede deshacer.</p>
                        <button onClick={confirmDelete} disabled={isDeleting}>
                            {isDeleting ? "Borrando..." : "Sí, borrar"}
                        </button>
                        <button onClick={() => setDeletingId(null)}>
                            Cancelar
                        </button>
                    </div>
                    <button onClick={confirmDelete}></button>
                </div>
            )}
        </>
    );
};
