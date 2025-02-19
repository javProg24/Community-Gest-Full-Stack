import { Herramienta_Response, HerramientaTabla } from "./Herramienta";
import { Entidad } from "./I_Metodos";
import { Instalacion_Response, InstalacionTabla } from "./Instalacion";
import { Reporte_Response, ReporteTabla } from "./Reporte";
import { Reserva_Herramienta_Response, Reserva_Herramienta_Tabla } from "./Reserva-Herramienta";
import { Reserva_Instalacion_Response, Reserva_Instalacion_Tabla } from "./Reserva-Instalacion";
import { Usuario_Response, UsuarioTabla } from "./Usuario";

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
export const getColumnasEntidades=(entidad:Entidad):Array<string>=>{
    const EntidadesClases=entidadesMapeadas[entidad];
    if(!EntidadesClases){
        return []
    }
    const instancia = new EntidadesClases()
    return Object.keys(instancia)
}
const listaCamposEntidades:{[key in Entidad]?:any}={
    [Entidad.Usuario]:Usuario_Response,
    [Entidad.Instalacion]:Instalacion_Response,
    [Entidad.Herramienta]:Herramienta_Response,
    [Entidad.Reporte]:Reporte_Response,
    [Entidad.Reserva_Herramienta]:Reserva_Herramienta_Response,
    [Entidad.Reserva_Instalacion]:Reserva_Instalacion_Response,
}
export const columnsEntidades=(entidad:Entidad):Array<string>=>{
    const campoColumnas=listaCamposEntidades[entidad];
    if(!campoColumnas)return[]
    return Object.values(campoColumnas)
}

// const listaCamposEntidades:{[key in Entidad]?:any}={
//     [Entidad.Usuario]:typeof(Campos_Usuario),
// }

// export const columnsEnti=(entidad:Entidad):Array<string>=>{
//     const campoColumnas=listaCamposEntidades[entidad];
//     if(!campoColumnas){
//         return []
//     }
//     return Object.keys(campoColumnas).filter(key=>isNaN(Number(key)))
// }

