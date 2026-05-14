import type { assets } from "../types/Interfaces";
import { useState } from "react";

const [searchTerm, setSearchTerm] = useState<string>("");
export function SearchBar() {
    return (
        <input
            type="text"
            placeholder="Buscar activo..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="search-input"
        >
        </input>
    )
}
