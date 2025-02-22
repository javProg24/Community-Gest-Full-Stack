import { Entidad } from "./Enums";
import { HerramientaTabla } from "./Herramienta";
import { InstalacionTabla } from "./Instalacion";
import { ReporteTabla } from "./Reporte";
import { Reserva_Herramienta_Response } from "./Reserva-Herramienta";
import { Reserva_Instalacion_Response } from "./Reserva-Instalacion";
import { UsuarioTabla } from "./Usuario";

export interface Accion<T=any>{
    accion:string;
    fila?:T;
}
// const entidadesMapeadas:{[key in Entidad]?:any}={
//     [Entidad.Instalacion]:InstalacionTabla,
//     [Entidad.Herramienta]:HerramientaTabla,
//     [Entidad.Reporte]:ReporteTabla,
//     [Entidad.Usuario]:UsuarioTabla,
//     [Entidad.Reserva_Herramienta]:Reserva_Herramienta_Tabla,
//     [Entidad.Reserva_Instalacion]:Reserva_Instalacion_Tabla
// }
// export const getColumnasEntidades=(entidad:Entidad):Array<string>=>{
//     const EntidadesClases=entidadesMapeadas[entidad];
//     if(!EntidadesClases){
//         return []
//     }
//     const instancia = new EntidadesClases()
//     return Object.keys(instancia)
// }
const listaCamposEntidades:{[key in Entidad]?:any}={
    [Entidad.Usuario]:UsuarioTabla,
    [Entidad.Instalacion]:InstalacionTabla,
    [Entidad.Herramienta]:HerramientaTabla,
    [Entidad.Reporte]:ReporteTabla,
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

