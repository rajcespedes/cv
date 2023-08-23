import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [ allValues, setAllValues ] = useState({
        nombres: '',
        apellidos: '',
        ocupacion: '',
        barrio:'',
        celular:'',
        telefono: '',
        licencia: '',
        email: '',
        traslado: '',
        vehiculo: '',
        tipoExperiencia: ''
    });

    return(
        <DataContext.Provider value={{ allValues, setAllValues}}>
            { children }
        </DataContext.Provider>
    )
}
