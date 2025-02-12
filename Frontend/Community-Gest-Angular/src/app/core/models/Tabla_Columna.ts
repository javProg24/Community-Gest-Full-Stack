import { HerramientaTabla } from "./Herramienta";
import { Entidad } from "./I_Metodos";
import { InstalacionTabla } from "./Instalacion";
import { ReporteTabla } from "./Reporte";
import { Reserva_Herramienta_Tabla } from "./Reserva-Herramienta";
import { Reserva_Instalacion_Tabla } from "./Reserva-Instalacion";
import { UsuarioTabla } from "./Usuario";

export interface Accion<T=any>{
    accion:string;
    fila?:T;
}


const entidadesMapeadas:{[key in Entidad]?:any}={
    [Entidad.Instalacion]:InstalacionTabla,
    [Entidad.Herramienta]:HerramientaTabla,
    [Entidad.Reporte]:ReporteTabla,
    [Entidad.Usuario]:UsuarioTabla,
    [Entidad.Reserva_Herramienta]:Reserva_Herramienta_Tabla,
    [Entidad.Reserva_Instalacion]:Reserva_Instalacion_Tabla
}

export const getEntidadesPropiedades=(entidad:Entidad):Array<string>=>{
    const EntidadesClases=entidadesMapeadas[entidad];
    if(!EntidadesClases){
        return []
    }
    const instancia = new EntidadesClases()
    return Object.keys(instancia)
}