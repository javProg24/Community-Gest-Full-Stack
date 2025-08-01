import { Tabla } from "./Tabla_Columna";

export interface Instalacion{
    id?:number,
    nombre:string,
    tipo:string,
    capacidad:number,
    descripcion:string,
    estado:boolean,
    asignado:boolean,
}  
export const InstalacionDatos={
    id:"id",
    nombre:"nombre",
    tipo:"tipo",
    capacidad:"capacidad",
    descripcion:"descripcion",
    estado:"estado",
    asignado:"asignado",
}as const;

export const tablaInstalacion:Tabla<Instalacion>[]=[
    {
        label:InstalacionDatos.id.toUpperCase(),
        def:InstalacionDatos.id,
        content:(row)=>row.id
    },
    {
        label:InstalacionDatos.nombre,
        def:InstalacionDatos.nombre,
        content:(row)=>row.nombre
    },
    {
        label:InstalacionDatos.tipo,
        def:InstalacionDatos.tipo,
        content:(row)=>row.tipo
    },
    {
        label:InstalacionDatos.capacidad,
        def:InstalacionDatos.capacidad,
        content:(row)=>row.capacidad
    },
    {
        label:InstalacionDatos.descripcion,
        def:InstalacionDatos.descripcion,
        content:(row)=>row.descripcion
    },
    {
        label:InstalacionDatos.estado,
        def:InstalacionDatos.estado,
        content:(row)=>row.estado?"Disponible":"Fuera de Servicio"
    },
    {
        label:InstalacionDatos.asignado,
        def:InstalacionDatos.asignado,
        content:(row)=>row.asignado?"Si":"No"
    }
]
