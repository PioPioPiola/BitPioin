
















































export interface IProducto {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface ICartItem {
    cantity: number;
}

export interface IPokeAbility {
    ability: {
        name: string;
    };
}

export interface IPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    abilities: IPokeAbility[];
}