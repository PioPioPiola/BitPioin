export function VistaSinPermiso({isLogged, vista, vistaVolver}){
        if (!isLogged){
            return vistaVolver;
        }

        return vista;
}