import { useState, useEffect } from "react";

export const useFetch = <T>(url:string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);

                if (!response.ok){
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const result = await response.json();

                setData(result);
            }
            catch (error) {
                const mensajeError = error instanceof Error ? error.message : "Error desconocido";
                setError(mensajeError);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}