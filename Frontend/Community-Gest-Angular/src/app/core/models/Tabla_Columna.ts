import { HerramientaTabla } from "./Herramienta";
import { Interfaces } from "./I_Metodos";
import { InstalacionTabla } from "./Instalacion";
import { ReporteTabla } from "./Reporte";
import { Reserva_Herramienta_Tabla } from "./Reserva-Herramienta";
import { Reserva_Instalacion_Tabla } from "./Reserva-Instalacion";
import { UsuarioTabla } from "./Usuario";

export interface Accion<T=any>{
    accion:string;
    fila?:T;
}
const entidadesMapeadas:{[key in Interfaces]?:any}={
    [Interfaces.Instalacion]:InstalacionTabla,
    [Interfaces.Herramienta]:HerramientaTabla,
    [Interfaces.Reporte]:ReporteTabla,
    [Interfaces.Usuario]:UsuarioTabla,
    [Interfaces.Reserva_Herramienta]:Reserva_Herramienta_Tabla,
    [Interfaces.Reserva_Instalacion]:Reserva_Instalacion_Tabla
}

export const getEntidadesPropiedades=(entidad:Interfaces):Array<string>=>{
    const EntidadesClases=entidadesMapeadas[entidad];
    if(!EntidadesClases){
        return []
    }
    const instancia = new EntidadesClases()
    return Object.keys(instancia)
}