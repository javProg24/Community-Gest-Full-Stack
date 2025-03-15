import { Entidad } from "./Enums";
import { HerramientaTabla } from "./Herramienta";
import { HorarioTabla } from "./Horario";
import { InstalacionTabla, tablaInstalacion } from "./Instalacion";
import { ReporteTabla } from "./Reporte";
import { Reserva_Herramienta_Response } from "./Reserva-Herramienta";
import { Reserva_Instalacion_Response } from "./Reserva-Instalacion";
import { tablaUsuario, UsuarioTabla } from "./Usuario";
export interface TableColumn<T>{
    label:string,
    def:string,
    content:(row:T)=>string|number|boolean|undefined
  }
export interface Accion<T=any>{
    accion:string;
    fila?:T;
}
export const Acciones={
    Editar:"Editar",
    Eliminar:"Eliminar"
}
const listaCamposEntidades:{[key in Entidad]?:unknown}={
    [Entidad.Usuario]:UsuarioTabla,
    [Entidad.Instalacion]:InstalacionTabla,
    [Entidad.Horario]:HorarioTabla,
    [Entidad.Herramienta]:HerramientaTabla,
    [Entidad.Reporte]:ReporteTabla,
    [Entidad.Reserva_Herramienta]:Reserva_Herramienta_Response,
    [Entidad.Reserva_Instalacion]:Reserva_Instalacion_Response,
}
export const columnasEntidades=(entidad:Entidad):Array<string>=>{
    const campoColumnas=listaCamposEntidades[entidad];
    if(!campoColumnas)return[]
    return Object.values(campoColumnas)
}
/////////////////////////////////////////////////////////////////////
const listaDatosEntidades:{[key in Entidad]?:unknown}={
    [Entidad.Instalacion]:tablaInstalacion,
    [Entidad.Usuario]:tablaUsuario,
}
export const columnasDatos=<T>(entidad:Entidad):TableColumn<T>[]=>{
    const datosColumnas=listaDatosEntidades[entidad]
    if(!datosColumnas)return[]
    console.log('efed',datosColumnas);
    return Object.values(datosColumnas)
}
/*
export function co<T>(entidad:Entidad):TableColumn<T>[]{
    const datosColumnas=listaDatosEntidades[entidad]
    if(!datosColumnas)return[]
    console.log('edheuh',datosColumnas)
    return Object.values(datosColumnas)
}*/
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

