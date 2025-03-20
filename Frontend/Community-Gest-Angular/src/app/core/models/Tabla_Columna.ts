import { Acciones, Entidad } from "./Enums";
import { HerramientaDatos, tablaHerramienta } from "./Herramienta";
import { HorarioDatos, tablaHorario } from "./Horario";
import { InstalacionDatos, tablaInstalacion } from "./Instalacion";
import { ReporteDatos, tablaReporte } from "./Reporte";
import { ReservaHerramientaDatos, tablaReservaHerramienta } from "./Reserva-Herramienta";
import { ReservaInstalacionDatos, tablaReservaInstalacion } from "./Reserva-Instalacion";
import { tablaUsuario, UsuarioDatos } from "./Usuario";
export interface TablaColumna<T>{
    label:string,
    def:string,
    content:(row:T)=>string|number|boolean|undefined
  }
export interface Accion<T=any>{
    accion:Acciones;
    fila:T;
}
const listaCamposEntidades:{[key in Entidad]?:unknown}={
    [Entidad.Usuario]:UsuarioDatos,
    [Entidad.Instalacion]:InstalacionDatos,
    [Entidad.Horario]:HorarioDatos,
    [Entidad.Herramienta]:HerramientaDatos,
    [Entidad.Reporte]:ReporteDatos,
    [Entidad.Reserva_Herramienta]:ReservaHerramientaDatos,
    [Entidad.Reserva_Instalacion]:ReservaInstalacionDatos,
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
    [Entidad.Horario]:tablaHorario,
    [Entidad.Herramienta]:tablaHerramienta,
    [Entidad.Reporte]:tablaReporte,
    [Entidad.Reserva_Instalacion]:tablaReservaInstalacion,
    [Entidad.Reserva_Herramienta]:tablaReservaHerramienta,
}
export const columnasDatos=<T>(entidad:Entidad):TablaColumna<T>[]=>{
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

