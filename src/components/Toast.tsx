
import { useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

const [toasts, setToasts] = useState<Toast[]>([]);

export function showToast(message: string, type: ToastType = 'info') {
    const id = crypto.randomUUID();

    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() =>
        setToasts(prev => prev.filter(t => t.id !== id))
        , 3000);
};